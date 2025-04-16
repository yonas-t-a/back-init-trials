import adminModel from "../model/admin.js";


export async function getAdmin(req, res) {
    try {
        const admins = await adminModel.getAdmin();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: "Error fetching admins" });
    }
}
export async function getAdminById(req, res) {
    const { id } = req.params;
    try {
        const admin = await adminModel.getAdminById(id);
        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ error: "Error fetching admin" });
    }
}
export async function createAdmin(req, res) {
    // Validate the request body
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const newAdmin = { name, email, password };
        const result = await adminModel.createAdmin(newAdmin);
        res.status(201).json({ id: result.insertId, ...newAdmin });
    } catch (error) {
        res.status(500).json({ error: "Error creating admin" });
    }
}
export async function updateAdmin(req, res) {
    // Validate the request body
    const { id } = req.params;
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const updatedAdmin = { name, email, password };
        const result = await adminModel.updateAdmin(id, updatedAdmin);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Admin not found" });
        }
        res.status(200).json({ id, ...updatedAdmin });
    } catch (error) {
        res.status(500).json({ error: "Error updating admin" });
    }
}
export async function deleteAdmin(req, res) {
    const { id } = req.params;
    try {
        const result = await adminModel.deleteAdmin(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Admin not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Error deleting admin" });
    }
}