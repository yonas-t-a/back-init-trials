

import {pool} from '../database.js';
import bcrypt from 'bcrypt';


const adminModel = {
    async getAdmin() {
        const [rows] = await pool.query('SELECT * FROM admin');
        return rows;
    },

    async getAdminById(id) {
        const [rows] = await pool.query('SELECT * FROM admin WHERE id = ?', [id]);
        return rows[0];
    },
    
    
    async createAdmin(admin) {
        const { admin_name, admin_email, password } = admin;
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await pool.query(
          'INSERT INTO admin (admin_name, admin_email, password) VALUES (?, ?, ?)',
          [admin_name, admin_email, hashedPassword]
        );
        return result;
      },      
    
    async updateAdmin(id, admin) {
        const { name, email, password } = admin;
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await pool.query('UPDATE admin SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, hashedPassword, id]);
        return result;
    },

    async deleteAdmin(id) {
        const [result] = await pool.query('DELETE FROM admin WHERE id = ?', [id]);
        return result;
    }
};
export default adminModel;
