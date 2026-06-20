function register(){


let username =
document.getElementById("username").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



if(!username||!email||!password){

alert("Fill all fields");

return;

}



localStorage.setItem(
"nexusUser",

JSON.stringify({

username,
email,
password

})

);



alert("Account created");


location.href="../index.html";


}




function login(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



let user =
JSON.parse(
localStorage.getItem("nexusUser")
);



if(
user &&
user.email==email &&
user.password==password
){


alert("Welcome "+user.username);


location.href="../index.html";


}

else{


alert("Wrong email or password");

}


}
