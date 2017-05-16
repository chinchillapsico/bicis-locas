function validateForm(){


/*Saves data of user*/
 var name = document.getElementById("name").value;
 var lastname = document.getElementById("lastname").value;
 var email= document.getElementById("input-email").value;
 var password= document.getElementById("input-password").value;
 var optionBike = document.getElementsByClassName("from-control").value;
 var twitter= document.getElementById("input-social").value;
 var checkbox= document.getElementById("check").value;


 var user = [name, lastname, email, password, optionBike, twitter, checkbox];

 
/*validate name, lastname, email, password, optionBike*/

    if (name || lastname || email || password || optionBike == ""){
		
        alert("Debes llenar los campos obligatorios");
		
    }else{
    	/*transform name/lastname and email to text node*/
        
        var nodoName = document.createTextNode("Has sido registrad@ como: " + name + " " + lastname + "<br>");
        var nodoEmail = document.createTextNode("Con este email: " + email);
   }
  
   /*password must be at least 6 characters  and not be password, 123456 or 098754.*/

function validatePass([3]){
	
 for (var i = 0; i < password.length ; i++) {
 	if (password.length < 6 || password =="123456" || "098754"){
 		return false;
 	}

while(validatePass(password != true){
	alert("Ingrese contraseña válida ("Debe contener al menos 6 caracteres y no está permitido 123456 ó 098754");

}
 }
  }

 /*email validate : name@domain.com*/

