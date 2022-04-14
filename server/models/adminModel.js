const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String
});

const adminModel = mongoose.model("adimnModel", adminSchema);

// async function createAdmin() {
//     const admin = new Admin({
//         name: 'asdf',
//         email: 'sdf',
//         password: 'sdffd'
//     });

//     const result = await Admin.save();
//     console.log(result);
// }

// createAdmin();

module.exports = adminModel;
