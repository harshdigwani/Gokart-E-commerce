var jwt = require("jwt-simple");
module.exports = function (arg1, password) {
    return jwt.decode(arg1, password,'HS512')
}