const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    confirmpassword: String
})

const reactUser = new mongoose.model("User",userSchema);

module.exports = reactUser;