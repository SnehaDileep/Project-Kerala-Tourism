
function registration()
{  
let Email = document.getElementById("email");
let Num = document.getElementById("phonenumber");
let Pass = document.getElementById("password");
    

    //Checking Email
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if (Email.value.match(pattern))
    {
        //If Email is OK - Proceeding with Number Check
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(Num.value.match(phoneno))
        {
            // If Email and Number is Ok - proceding with Password Check
            var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if(pass.value.match(passw)) 
                { 
                    alert("Registered Successfully - Please Log In");
                    return true;
                }
                else
                { 
                alert('Please Enter Stronger Password (8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
                return false;
                }
        }
        else
        {
            alert("Phone Number Not Valid");
            return false;
            
        }
    }
    else  // If Email Is Wrong 
    {
        alert("Email is not blank");
        return false;
    }

}