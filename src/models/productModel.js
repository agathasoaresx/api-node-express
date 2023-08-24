import db from '../database/db.js'

const create = async (product) => {
    const {name, category, stock, price, brand} = product
    return await db.query('INSERT INTO products (name, category, stock, price, brand) VALUES (?, ?, ?, ?, ?)', [name, category, stock, price, brand])
}

const del = async (id) => {
    return await db.query('DELETE FROM products WHERE id = ?', [id])
}

const get = async (id) => {
    return await db.query('SELECT * FROM products WHERE id = ?', [id])
}

const update = async (product) => {
    const {id, name, category, stock, price, brand} = product
    return await db.query('UPDATE products SET name = ?, category = ?, stock = ?, price = ?, brand = ? WHERE id = ?', [name, category, stock, price, brand, id])
}

export default {create, del, get, update}