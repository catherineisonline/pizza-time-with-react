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

export const createUser = (id, user) => {
    return new Promise((resolve, reject) => {
        const { email, password, fullname, address, number
        } = user;
        let query;
        let params;

        if (address === undefined) {
            query = 'INSERT INTO users (id, email, password, fullname, number) VALUES(?, ?, ?, ?, ?)';
            params = [id, email, password, fullname, number];
        }
        if (number === undefined) {
            query = 'INSERT INTO users (id, email, password, fullname, address) VALUES(?, ?, ?, ?, ?)';
            params = [id, email, password, fullname, address];
        }
        if (address === undefined && number === undefined) {
            query = 'INSERT INTO users (id, email, password, fullname) VALUES(?, ?, ?, ?)';
            params = [id, email, password, fullname,];
        }
        else {
            query = 'INSERT INTO users (id, email, password, fullname, address) VALUES(?, ?, ?, ?, ?)';
            params = [id, email, password, fullname, address];
        }
        sql.execute(query, params)
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}


export const updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
        const { email, password, fullname, address, number } = user;
        let query;
        let params;

        // if (email === undefined) {
        //     query = 'UPDATE users SET password = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
        //     params = [password, fullname, address, number];
        // }
        // else if (password === undefined) {
        //     query = 'UPDATE users SET email = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
        //     params = [email, fullname, address, number];
        // }
        // else if (fullname === undefined) {
        //     query = 'UPDATE users SET email = ?, password = ?, address = ?, number = ? WHERE id = ?';
        //     params = [email, password, address, number];
        // }
        // else if (address === undefined) {
        //     query = 'UPDATE users SET email = ?, password = ?, fullname = ?, number = ? WHERE id = ?';
        //     params = [email, password, fullname, number];
        // }
        // else if (number === undefined) {
        //     query = 'UPDATE users SET email = ?, password = ?, fullname = ?, address = ? WHERE id = ?';
        //     params = [email, password, fullname, address];
        // }
        // else {
        //     params = [email, password, fullname, address, number];
        //     query = 'UPDATE users SET email = ?, password = ?, fullname = ?, address = ?, number = ? WHERE id = ?';

        // }
        //test purposes
        params = [email, password, fullname, address, number];
        query = 'UPDATE users SET email = ?, password = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
        sql.execute(query, [...params, id])
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