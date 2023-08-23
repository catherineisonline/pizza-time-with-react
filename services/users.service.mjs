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


// export const updateUser = (id, user) => {
//     return new Promise((resolve, reject) => {
//         const { email, password, fullname, address, number } = user;
//         const updates = [];
//         const params = [];

//         if (email !== undefined) {
//             updates.push('email = ?');
//             params.push(email);
//         }
//         if (password !== undefined) {
//             updates.push('password = ?');
//             params.push(password);
//         }
//         if (fullname !== undefined) {
//             updates.push('fullname = ?');
//             params.push(fullname);
//         }
//         if (address !== undefined) {
//             updates.push('address = ?');
//             params.push(address);
//         }
//         if (number !== undefined) {
//             updates.push('number = ?');
//             params.push(number);
//         }

//         if (updates.length === 0) {
//             reject(new Error('No valid update parameters provided.'));
//             return;
//         }

//         const updateString = updates.join(', ');
//         const query = `UPDATE users SET ${updateString} WHERE id = ?`;
//         params.push(id);
//         sql.execute(query, params)
//             .then((result) => resolve(result))
//             .catch((err) => reject(err))
//     })
// }

export const updateUser = (user) => {
    return new Promise((resolve, reject) => {
        const { id, email, password, fullname, address, number } = user;
        let query;
        let params;

        // if (email === undefined) {
        //     query = 'UPDATE users SET password = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
        //     params = [id, password, fullname, address, number];
        // }
        // else if (password === undefined) {
        //     query = 'UPDATE users SET email = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
        //     params = [id, email, fullname, address, number, id];
        // }
        // else if (fullname === undefined) {
        //     query = 'UPDATE users SET email = ?, password = ?, address = ?, number = ? WHERE id = ?';
        //     params = [id, email, password, address, number];
        // }
        // else if (address === undefined) {
        //     query = 'UPDATE users SET email = ?, password = ?, fullname = ?, number = ? WHERE id = ?';
        //     params = [id, email, password, fullname, number];
        // }
        // else if (number === undefined) {
        //     query = 'UPDATE users SET email = ?, password = ?, fullname = ?, address = ? WHERE id = ?';
        //     params = [id, email, password, fullname, address];
        // }
        // else {
        query = 'UPDATE users SET email = ?, password = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
        params = [id, email, password, fullname, address, number];
        // }
        sql.execute(query, params)
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
    //     const { email, password, fullname, address, number } = user;
    //     const updates = [];
    //     const params = [];
    //     params.push(id);
    //     if (email !== undefined) {
    //         updates.push('email = ?');
    //         params.push(email);
    //     }
    //     if (password !== undefined) {
    //         updates.push('password = ?');
    //         params.push(password);
    //     }
    //     if (fullname !== undefined) {
    //         updates.push('fullname = ?');
    //         params.push(fullname);
    //     }
    //     if (address !== undefined) {
    //         updates.push('address = ?');
    //         params.push(address);
    //     }
    //     if (number !== undefined) {
    //         updates.push('number = ?');
    //         params.push(number);
    //     }

    //     if (updates.length === 0) {
    //         reject(new Error('No valid update parameters provided.'));
    //         return;
    //     }

    //     const updateString = updates.join(', ');
    //     const query = `UPDATE users SET ${updateString} WHERE id = ?`;


    //     sql.execute(query, params)
    //         .then((result) => resolve(result))
    //         .catch((err) => reject(err))
    // })
}


export const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM users WHERE id = ?';
        sql.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}