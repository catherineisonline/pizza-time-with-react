import client from "../config/sql.mjs";
const query = {
  getUsers: "SELECT * FROM users",
  getUser: "SELECT * FROM users WHERE id = ?",
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

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    client
      .execute(query.getUsers)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    client
      .execute({ sql: query.getUser, args: [id] })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
};

export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const { id, email, password, fullname, address, number } = user;
    let userQuery, params;

    if (address === undefined && number === undefined) {
      userQuery = query.insertUserBasic;
      params = [id, email, password, fullname];
    } else if (address === undefined) {
      userQuery = query.insertUserWithNumber;
      params = [id, email, password, fullname, number];
    } else {
      userQuery = query.insertUserWithAddress;
      params = [id, email, password, fullname, address];
    }
    client
      .execute({
        sql: userQuery,
        args: [...params],
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    const { email, password, fullname, address, number } = user;
    let params;
    params = [email, password, fullname, address, number];
    client
      .execute({ sql: query.updateUser, args: [...params, id] })
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
