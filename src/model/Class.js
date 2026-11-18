import { pool } from '../config/db.js';

const COLUMNS = 'id, ten_lop';

export const getAllClass = async () => {
    const sql = `SELECT ${COLUMNS} FROM lop ORDER BY id ASC`;
    const [rows] = await pool.query(sql);
    return rows;
};

export const getClassById = async (id) => {
    const sql = `SELECT ${COLUMNS} FROM lop WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0] || null;
};

export const createClass = async (data) => {
    const { ten_lop } = data;
    const sql = 'INSERT INTO lop (ten_lop) VALUES (?)';
    const [result] = await pool.execute(sql, [ten_lop]);
    return { id: result.insertId, ten_lop };
};

export const updateClass = async (id, data) => {
    const classId = Number(id);
    const { ten_lop } = data;
    const sql = 'UPDATE lop SET ten_lop = ? WHERE id = ?';
    await pool.execute(sql, [ten_lop, classId]);
    return { id: classId, ten_lop };
};

export const deleteClass = async (id) => {
    const sql = 'DELETE FROM lop WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
};
