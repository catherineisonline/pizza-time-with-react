import * as userServices from "../services/users.service.mjs";
import bcrypt from "bcrypt";

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
        message: "User by id retrieved",
        data: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
export const getUserByEmail = (req, res) => {
  const { email } = req.params;
  userServices
    .getUser(email)
    .then((result) => {
      res.status(200).json({
        message: "User by email retrieved",
        data: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
export const loginUsers = (req, res) => {
  const { email, password } = req.body;

  userServices
    .getUserByEmail(email)
    .then((result) => {
      if (!result || !result.rows.length) {
        return res.status(404).json({ message: "User not found" });
      }
      const user = result.rows[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json({
          message: "Login successful",
          data: { id: user.id, email: user.email, fullname: user.fullname },
        });
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createUser = (req, res) => {
  const user = req.body;

  userServices
    .createUser(user)
    .then(() => {
      res.status(200).json({
        message: "User created",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
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
