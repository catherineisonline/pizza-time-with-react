import * as userServices from "../services/users.service.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
const secret = process.env.JWT_SECRET;
const expires = process.env.JWT_EXPIRES_IN;

export const authToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
export const authUser = async (req, res) => {
  const userEmail = req.user.email;
  try {
    const response = await userServices.getUserByEmail(userEmail);
    if (!response.success) {
      return res.status(400).json({ message: "User doesn't exist" });
    }
    const { email, fullname, address, number, id } = response.user;
    return res.status(200).json({
      message: "Authenticated",
      user: { email, fullname, address, number, id },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong with user authentication" });
  }
};
export const logoutUser = (_, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 0,
    });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong during logout" });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await userServices.getUserByEmail(email);
    if (!response.success) {
      return res.status(400).json({ message: "User doesn't exist" });
    }
    const { hashed_password } = response.user;
    const isValid = await bcrypt.compare(password, hashed_password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const { email: userEmail, fullname, address, number, id } = response.user;
    const token = jwt.sign({ id: id, email: userEmail }, secret, {
      expiresIn: expires || "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Login successful",
      user: { email: userEmail, fullname, address, number, id },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong during login" });
  }
};
export const createUser = async (req, res) => {
  const user = req.body;
  const { email, password } = req.body;
  try {
    const response = await userServices.getUserEmail(email);
    if (response.success) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuidv4();
    delete user.password;
    const userWithHash = { ...user, hashed_password: hashedPassword, id: id };
    const newUser = await userServices.createUser(userWithHash);
    if (newUser.success) {
      return res.status(200).json({ message: "User created successfully" });
    }
    return res.status(400).json({ message: "User could not be created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong during user creation" });
  }
};

export const updateUser = async (req, res) => {
  const user = req.body;
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const targetEmail = decoded.email;
    if (user.password) {
      const hashed = await bcrypt.hash(user.password, 10);
      user.hashed_password = hashed;
      delete user.password;
    }
    const response = await userServices.updateUser(targetEmail, user);
    if (response.success) {
      const { email, fullname, address, number, id } = response.user;
      if (targetEmail !== email) {
        const updatedToken = jwt.sign({ id, email }, secret, {
          expiresIn: expires || "1d",
        });
        res.cookie("token", updatedToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
          maxAge: 24 * 60 * 60 * 1000,
        });
      }
      return res.status(200).json({
        message: "User updated successfully",
        data: { email, fullname, address, number, id },
      });
    }
    return res.status(400).json({ message: "User couldn't be updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong during user update" });
  }
};
export const deleteUser = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }
  const { id } = req.params;
  try {
    const decoded = jwt.verify(token, secret);
    const targetId = decoded.id;
    if (targetId !== id) {
      return res.status(403).json({ message: "You can only delete your own account" });
    }
    const response = await userServices.deleteUser(id);
    if (response.success) {
      res.cookie("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 0,
      });
      return res.status(200).json({
        message: "User deleted",
      });
    }
    return res.status(400).json({ message: "User couldn't be deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete the user" });
  }
};
