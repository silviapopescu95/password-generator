//The following fuction will generate our password.
function generate(){
    let passwordLength = document.getElementById("slider").value;
    //Shows all letters, numbers, and special characters for password
    let values = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!#%$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    let password = "";

    //For loop for choosing characters for password
    for(var i=0; i <= passwordLength; i++){
        password = password + values.charAt(Math.floor(Math.random() = Math.floor(values.length -1)));
    }

    //This will display the password in textbox below
    document.getElementById("display").values = password;

}