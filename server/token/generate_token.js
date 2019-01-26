var jwt = require("jwt-simple");
module.exports = function (arg1, arg2, password) {
    return jwt.encode({ 'email': arg1, 'password': arg2 }, password,'HS512')
}