import * as userServices from "../services/users.service.mjs";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
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
