let user =
JSON.parse(
localStorage.getItem("nexusUser")
);


let account =
document.getElementById("account");


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


</div>


</div>


</div>


`;


}
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
