const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');

exports.Login = async (req, res) => {
    let { login_id, login_password } = req.body;
    let user = await User.find({ login_id: login_id, login_password: login_password });
    if (user.length > 0) {
        let data = { id: user[0]._id };
        let jwtSecretKey = process.env.TOKEN_SECRET;
        let token = jwt.sign(data, jwtSecretKey);

        return res.json({ success: true, token: token, message: "Login successfull try again", data: user });
    } else {
        return res.json({ success: false, token: "", message: "Invalid credentials try again", data: user });
    }
}