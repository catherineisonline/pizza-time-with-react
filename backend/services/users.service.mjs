import client from "../config/sql.mjs";
const query = {
  getUserByEmail: "SELECT * FROM users WHERE email = ?",
  deleteUser: "DELETE FROM users WHERE id = ?",
};
export const getUserByEmail = async (email) => {
  try {
    const response = await client.execute({ sql: query.getUserByEmail, args: [email] });
    if (response?.rows?.length > 0) {
      return { success: true, user: response.rows[0] };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Error in getUserByEmail:", error);
    throw new Error("Database query failed while fetching user by email");
  }
};

export const getUserEmail = async (email) => {
  try {
    const response = await client.execute({ sql: query.getUserByEmail, args: [email] });
    if (response?.rows?.length > 0) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Error in getUserEmail:", error);
    throw new Error("Database query failed while fetching user's email");
  }
};

export const createUser = async (user) => {
  const updates = Object.entries(user).filter(([_, v]) => v != null);
  const setClause = updates.map(([k]) => `${k}`).join(", ");
  const setValues = updates.map((_) => `?`).join(", ");
  const args = [...updates.map(([_, v]) => v)];
  const sql = `INSERT INTO users (${setClause}) VALUES(${setValues})`;
  try {
    const response = await client.execute({
      sql,
      args,
    });
    if (response?.rowsAffected === 1) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Error in createUser:", error);
    throw new Error("Database query failed while creating the user");
  }
};

export const updateUser = async (targetEmail, user) => {
  const updates = Object.entries(user).filter(([_, v]) => v != null);
  const setClause = updates.map(([k]) => `${k} = ?`).join(", ");
  const args = [...updates.map(([_, v]) => v), targetEmail];
  const sql = `UPDATE users SET ${setClause} WHERE email = ?`;
  try {
    await client.execute({ sql, args });

    const response = await client.execute({
      sql: "SELECT * FROM users WHERE email = ?",
      args: [user.email || targetEmail],
    });

    if (response?.rows?.length > 0) {
      return { success: true, user: response.rows[0] };
    }
    return { success: false };
  } catch (error) {
    console.log("Error in updateUser:", error);
    throw new Error("Database query failed while updating the user");
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await client.execute({ sql: query.deleteUser, args: [id] });
    if (response?.rows?.length === 0) {
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.log("Error in deleteUser:", error);
    throw new Error("Database query failed while deleting the user");
  }
};
