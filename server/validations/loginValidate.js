//var user = require('../models/user')

module.exports = function validate(email,password){

    var testEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var letters = /^([A-Za-z])+$/;
  
/*mobile check
    if(isNaN(user.mobile)||user.mobile.indexOf(" ")!=-1)
    {
       console.log("Enter numeric value")
       return false;
    }
    if(user.mobile.length!=10)
    {
         console.log("enter 10 digit number");
         return false;
    }
    if(user.mobile.charAt(0)!='7' && user.mobile.charAt(0)!='9' && user.mobile.charAt(0)!='8' && user.mobile.charAt(0)!='6')
    {
         console.log("it should start with 9 or 8 or 7 or 6");
         return false;
    }
*/
//password check
    if(password.length<6)
    {
     console.log("Please Enter strong password");
      return false;
    }

//email check  
    if (testEmail.test(email) == false)
    {
    console.log('Invalid Email Address');
      return (false);
    }

  }
  