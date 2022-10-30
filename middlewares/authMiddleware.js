const jwt = require('jsonwebtoken');

exports.checkAuthentication = (req, res, next) => {
    let { token } = req.headers;
    if (token === "" || token === undefined) {
        return res.json({ success: false, message: "An error occured token is empty or not found" });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ success: false, message: "This token is invalid or expired." })
        } else {
            req.decoded = decoded
            next()
        }
    });
}