const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    user_name: String,
    user_email: String,
    login_id: String,
    login_password: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", UsersSchema);

module.exports = User;