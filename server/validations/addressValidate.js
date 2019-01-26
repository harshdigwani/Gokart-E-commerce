//var user = require('../models/user')

module.exports = function validate(address) {

    var chars = /^([A-Za-z0-9 /-])+$/;
    var letters = /^([A-Za-z ])+$/;
    var key

    //Name , colony , landmark , city , state ,address_type , isSelected

    for (key in address) {
        if (key == 'id' || key == 'mobile' || key == 'pincode' || key == 'house')
            continue
        {   //(address[key]).length < 5 || 
            if (address[key] == null) {
                console.log(key + " can not be empty");
                //console.log((address[key]+'aa').length);
                return false;
            }
            if (letters.test(address[key]) == false) {
                console.log("Please enter correct " + key);
                return false;
            }
        }
    }

    //mobile check
    if (isNaN(address.mobile) || address.mobile.indexOf(" ") != -1) {
        console.log("Enter numeric value")
        return false;
    }
    if (address.mobile.length != 10) {
        console.log("enter 10 digit number");
        return false;
    }
    if (address.mobile.charAt(0) != '7' && address.mobile.charAt(0) != '9' &&
        address.mobile.charAt(0) != '8' && address.mobile.charAt(0) != '6') {
        console.log("it should start with 9 or 8 or 7 or 6");
        return false;
    }

    //pincode check
    if (isNaN(address.pincode) || address.pincode.indexOf(" ") != -1) {
        console.log("Enter numeric value")
        return false;
    }
    if (address.pincode.length != 6) {
        console.log("enter 6 digit number");
        return false;
    }

    //houseNo check
    if (address.house == null) {
        console.log("house no can not be empty");
        return false;
    }
    if (chars.test(address.house) == false) {
        console.log("Please enter correct house no");
        return false;
    }
    /*
        //colony check
        if (address.colony.length < 3 || address.colony == null) {
            console.log("Colony can not be empty");
            return false;
        }
        if (letters.test(address.colony) == false) {
            console.log("Please enter correct Colony");
            return false;
        }
    
        //landmark check
        if (address.landmark.length < 3 || address.landmark == null) {
            console.log("landmark can not be empty");
            return false;
        }
        if (letters.test(address.landmark) == false) {
            console.log("Please enter correct landmark");
            return false;
        }
    
        //city check
        if (address.landmark.length < 3 || address.landmark == null) {
            console.log("landmark can not be empty");
            return false;
        }
        if (letters.test(address.landmark) == false) {
            console.log("Please enter correct landmark");
            return false;
        }
    
    
    */
}