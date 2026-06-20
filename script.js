// Nexus.io account system


let user = JSON.parse(
    localStorage.getItem("nexusUser")
);



let account = document.getElementById("account");



// если пользователь вошёл

if(user){


account.innerHTML = `


<div class="profile-menu">


<img 
class="avatar"
src="${user.avatar}"
>



<div class="user">


${user.username}



<div class="dropdown">


<a href="pages/profile.html">
Profile
</a>



<a href="#">
Upload Game
</a>



<a href="#">
Settings
</a>



<a href="#" onclick="logout()">
Logout
</a>



</div>


</div>


</div>


`;



}



// если гость

else{


account.innerHTML = `


<a href="pages/login.html">
Login
</a>


<a href="pages/register.html">
Sign Up
</a>


`;

}




// выход из аккаунта


function logout(){


localStorage.removeItem("nexusUser");



window.location.href="index.html";


}
