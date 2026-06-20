let user =
JSON.parse(
localStorage.getItem("nexusUser")
);



if(user){

document.getElementById("username")
.innerHTML=user.username;

}
