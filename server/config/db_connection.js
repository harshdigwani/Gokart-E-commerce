var mysql = require('mysql')
var properties = require('../config/db_properties')
module.exports = {
    getConnection : ()=>{
        return mysql.createConnection({
            host : properties.host,
            user : properties.user,
            password : properties.password,
            database : properties.database
        })
    }
}