import * as userServices from "../services/users.service.mjs";

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
    .getUserByEmail(email)
    .then((result) => {
      res.status(200).json({
        message: "User by email retrieved",
        data: result,
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
