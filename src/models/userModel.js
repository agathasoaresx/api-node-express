import db from '../database/db.js';

const list = async () => {
    return await db.query('SELECT * FROM users')
}

const create = async (user) => {
    const {name, email, password} = user
    //interpolação - a ordem do array é a ordem dos ?
    return await db.query('INSERT INTO users (name, email, pass) VALUES (?, ?, ?)', [name, email, password])
}


export default {list, create}
