import sql from "../config/sql.mjs";

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users';
        sql.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

export const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        sql.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

export const createUser = (user) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (id, email, password, fullname) VALUES(?, ?, ?, ?)';
        const { id, email, password, fullname } = user;
        sql.execute(query, [id, email, password, fullname])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

export const updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE users SET email = ?, password = ?, fullname = ? WHERE id = ?';
        const { email, password, fullname } = user;
        sql.execute(query, [email, password, fullname, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

export const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM users WHERE id = ?';
        sql.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}