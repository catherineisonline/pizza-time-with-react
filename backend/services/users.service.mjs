import client from "../config/sql.mjs";
const query = {
  getUsers: "SELECT * FROM users",
  getUser: "SELECT * FROM users WHERE id = ?",
  getUserByEmail: "SELECT * FROM users WHERE email = ?",
  deleteUser: "DELETE FROM users WHERE id = ?",
  insertUserWithAddress:
    "INSERT INTO users (id, email, password, hashed_password, fullname, address) VALUES(?, ?, ?, ?, ?, ?)",
  insertUserWithNumber:
    "INSERT INTO users (id, email, password, hashed_password, fullname, number) VALUES(?, ?, ?, ? ,?, ?)",
  insertUserBasic: "INSERT INTO users (id, email, password, hashed_password, fullname) VALUES(?, ?, ?, ?, ?)",
};
export const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    client
      .execute({ sql: query.getUserByEmail, args: [email] })
      .then((result) => {
        if (result?.rows?.length > 0) {
          resolve({ exists: true, message: "User found", user: result.rows[0] });
        } else {
          resolve({ exists: false, message: "User doesn't exist" });
        }
      })
      .catch((err) => reject(err));
  });
};

export const getUserEmail = (email) => {
  return new Promise((resolve, reject) => {
    client
      .execute({ sql: query.getUserByEmail, args: [email] })
      .then((result) => {
        if (result?.rows?.length > 0) {
          resolve({ exists: true, message: "Email already exists" });
        } else {
          resolve({ exists: false, message: "Email available" });
        }
      })
      .catch((err) => reject(err));
  });
};
// export const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     client
//       .execute(query.getUsers)
//       .then((result) => {
//         resolve(result);
//       })
//       .catch((err) => reject(err));
//   });
// };

// export const getUser = (id) => {
//   return new Promise((resolve, reject) => {
//     client
//       .execute({ sql: query.getUser, args: [id] })
//       .then((result) => {
//         resolve(result);
//       })
//       .catch((err) => reject(err));
//   });
// };

export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const { id, email, password, hashed_password, fullname, address, number } = user;
    let userQuery, params;

    if (address === undefined && number === undefined) {
      userQuery = query.insertUserBasic;
      params = [id, email, password, hashed_password, fullname];
    } else if (address === undefined) {
      userQuery = query.insertUserWithNumber;
      params = [id, email, password, hashed_password, fullname, number];
    } else {
      userQuery = query.insertUserWithAddress;
      params = [id, email, password, hashed_password, fullname, address];
    }
    client
      .execute({
        sql: userQuery,
        args: [...params],
      })
      .then(() => {
        resolve({ done: true, message: "User created" });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateUser = (targetEmail, user) => {
  return new Promise((resolve, reject) => {
    const updates = Object.entries(user).filter(([_, v]) => v != null);
    const setClause = updates.map(([k]) => `${k} = ?`).join(", ");
    const args = [...updates.map(([_, v]) => v), targetEmail];

    const sql = `UPDATE users SET ${setClause} WHERE email = ?`;
    client
      .execute({ sql, args })
      .then(() => client.execute({ sql: "SELECT * FROM users WHERE email = ?", args: [user.email || targetEmail] }))
      .then((result) => resolve({ done: true, message: "User updated", user: result.rows[0] }))
      .catch((err) => reject(err));
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    client
      .execute({ sql: query.deleteUser, args: [id] })
      .then(() => resolve({ done: true }))
      .catch((err) => reject(err));
  });
};
