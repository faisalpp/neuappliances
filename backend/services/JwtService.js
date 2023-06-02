const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET} = require('../config/index');

class JWTService{
    // sign access token
    static signAccessToken(payload, expiryTime){
        return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: expiryTime});
    }

    // verify access token
    static verifyAccessToken(token){
        return jwt.verify(token, ACCESS_TOKEN_SECRET);
    }


}

module.exports = JWTService;