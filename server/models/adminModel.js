const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String
});
const Admin = mongoose.model("Admin", adminSchema);

async function createAdmin(adm) {
    const admin = new Admin({
        name: adm.name,
        email: adm.email,
        password: adm.password
    });
    const result = await admin.save();
}

module.exports.createAdmin = createAdmin;