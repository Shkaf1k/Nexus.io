function register(){

let username =
document.getElementById("username").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;


if(!username || !email || !password){

alert("Fill all fields");
return;

}


let user = {

username:username,
email:email,
password:password

};


localStorage.setItem(
"nexusUser",
JSON.stringify(user)
);


alert("Account created!");

window.location.href="../index.html";

}



function login(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



let saved =
JSON.parse(
localStorage.getItem("nexusUser")
);



if(
saved &&
saved.email==email &&
saved.password==password
){


localStorage.setItem(
"logged",
"true"
);


alert("Welcome "+saved.username);


window.location.href="../index.html";


}

else{


alert("Wrong login");

}


}
