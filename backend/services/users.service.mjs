import client from "../config/sql.mjs";
const query = {
  getUsers: "SELECT * FROM users",
  getUser: "SELECT * FROM users WHERE id = ?",
  getUserByEmail: "SELECT * FROM users WHERE email = ? LIMIT 1",
  deleteUser: "DELETE FROM users WHERE id = ?",
  insertUserWithAddress:
    "INSERT INTO users (id, email, password, fullname, address) VALUES(?, ?, ?, ?, ?)",
  insertUserWithNumber:
    "INSERT INTO users (id, email, password, fullname, number) VALUES(?, ?, ?, ?, ?)",
  insertUserBasic:
    "INSERT INTO users (id, email, password, fullname) VALUES(?, ?, ?, ?)",
  updateUser:
    "UPDATE users SET email = ?, password = ?, fullname = ?, address = ?, number = ? WHERE id = ?",
};
import bcrypt from "bcrypt";
export const getUsers = () => {
  return new Promise((resolve, reject) => {
    client
      .execute(query.getUsers)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    client
      .execute({ sql: query.getUser, args: [id] })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
export const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    client
      .execute({ sql: query.getUserByEmail, args: [email] })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
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
          return res.status(500).json({ message: "Error verifying password" });
        }

        if (!isMatch) {
          return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({
          message: "Login successful",
          data: { id: user.id, email: user.email, fullname: user.fullname }, // Do not return password!
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error", error: err });
    });
};

export const createUser = async (user) => {
  return new Promise((resolve, reject) => {
    const { id, email, password, fullname, address, number } = user;
    const saltRounds = 10;

    bcrypt
      .hash(password, saltRounds)
      .then((hashedPassword) => {
        let query, params;
        if (address === undefined && number === undefined) {
          query = query.insertUserBasic;
          params = [id, email, hashedPassword, fullname];
        } else if (address === undefined) {
          query = query.insertUserWithNumber;
          params = [id, email, hashedPassword, fullname, number];
        } else {
          query = query.insertUserWithAddress;
          params = [id, email, hashedPassword, fullname, address];
        }

        client
          .execute({ sql: query, args: params })
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    const { email, password, fullname, address, number } = user;
    let query, params;

    // Check if a password update is needed
    const hashPassword = password
      ? bcrypt.hash(password, 10)
      : Promise.resolve(null);

    hashPassword
      .then((hashedPassword) => {
        params = [email, hashedPassword || password, fullname, address, number]; // Use hashed password if updated
        return client.execute({ sql: query.updateUser, args: [...params, id] });
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    client
      .execute({ sql: query.deleteUser, args: [id] })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
