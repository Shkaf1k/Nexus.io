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



let user={

username:username,

email:email,

password:password,

avatar:"https://i.imgur.com/6VBx3io.png"

};



localStorage.setItem(
"nexusUser",
JSON.stringify(user)
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


location.href="../index.html";


}

else{


alert("Wrong login");

}


}
