import * as userServices from "../services/users.service.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
const secret = process.env.JWT_SECRET;
const expires = process.env.JWT_EXPIRES_IN;

export const getUsers = (req, res) => {
  userServices
    .getUsers()
    .then((result) => {
      res.status(200).json({
        message: "Users retrieved",
        data: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  userServices
    .getUser(id)
    .then((result) => {
      res.status(200).json({
        message: "User retrieved",
        data: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

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
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
export const authUser = (req, res) => {
  try {
    const userEmail = req.user.email;
    userServices
      .getUserByEmail(userEmail)
      .then((result) => {
        if (!result.exists) {
          return res.status(400).json({ message: result.message });
        }
        const { email, fullname, address, number, id } = result.user;
        return res.status(200).json({
          message: "Authenticated",
          user: { email: email, fullname: fullname, address: address, number: number, id: id },
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
export const logoutUser = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
    });
    return res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Something went wrong during logout" });
  }
};
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  userServices
    .getUserByEmail(email)
    .then(async (result) => {
      if (!result.exists) {
        return res.status(400).json({ message: result.message });
      }
      const { hashed_password } = result.user;

      return bcrypt.compare(password, hashed_password).then((isValid) => {
        if (!isValid) {
          return res.status(401).json({ message: "Invalid password" });
        }

        const { email, fullname, address, number, id } = result.user;
        const token = jwt.sign({ id: id, email: email }, secret, {
          expiresIn: expires || "1d",
        });
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({
          message: "Login successful",
          user: { email: email, fullname: fullname, address: address, number: number, id: id },
        });
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    });
};
export const createUser = async (req, res) => {
  const user = req.body;
  const { email, password } = req.body;
  userServices
    .getUserEmail(email)
    .then(async (result) => {
      if (result.exists) {
        return res.status(400).json({ message: result.message });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const id = uuidv4();
      const userWithHash = { ...user, hashed_password: hashedPassword, id: id };
      return userServices.createUser(userWithHash);
    })
    .then((creationResult) => {
      if (creationResult.done) {
        return res.status(200).json({ message: creationResult.message });
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    });
};
export const updateUser = (req, res) => {
  const user = req.body;
  const { id } = req.params;
  userServices
    .updateUser(id, user)
    .then(() => {
      res.status(200).json({
        message: `User updated`,
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  userServices
    .deleteUser(id)
    .then(() => {
      res.status(200).json({
        message: "User deleted",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
