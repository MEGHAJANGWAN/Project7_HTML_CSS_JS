function showModal(){
    document.querySelector(".overlay").classList.add("showoverlay")
    document.querySelector(".container").classList.add("showloginform")
}
// if in login button the onclick is not in the elment, we use document.addEventListner
// const btnlogin = document.querySelector(".btn-login");  // Button
// btnlogin.addEventListener("click", showModal)  // Button click


function closeModal(){
    document.querySelector(".overlay").classList.remove("showoverlay")
    document.querySelector(".container").classList.remove("showloginform")
}

const closemodal = document.querySelector("span");
closemodal.addEventListener("click", closeModal )