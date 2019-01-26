//var merchent = require('../models/merchent')

module.exports = function validate(merchent){

    var testEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var letters = /^([A-Za-z])+$/;
  
//mobile check
    if(isNaN(merchent.mobile)||merchent.mobile.indexOf(" ")!=-1)
    {
       console.log("Enter numeric value")
       return false;
    }
    if(merchent.mobile.length!=10)
    {
         console.log("enter 10 digit number");
         return false;
    }
    if(merchent.mobile.charAt(0)!='7' && merchent.mobile.charAt(0)!='9' && merchent.mobile.charAt(0)!='8' && merchent.mobile.charAt(0)!='6')
    {
         console.log("it should start with 9 or 8 or 7 or 6");
         return false;
    }

//password check
    if(merchent.password.length<6)
    {
     console.log("Please Enter strong password");
      return false;
    }

//email check  
    if (testEmail.test(merchent.email) == false)
    {
    console.log('Invalid Email Address');
      return (false);
    }

//name check
    if(merchent.name.length<3 || merchent.name==null)
    {
      console.log("name can not be empty");
      return false;
    }
    if(letters.test(merchent.name) == false)
    {
      console.log("Please enter correct name");
      return false;
    }

//shopName check
    if(merchent.shopName.length<1 || merchent.shopName==null)
    {
      return false;
    }
    if(letters.test(merchent.shopName) == false)
    {
      console.log("Please enter correct name");
      return false;
    }

  }
  