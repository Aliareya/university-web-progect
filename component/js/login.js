const username = document.getElementById('L-username');
const password = document.getElementById('L-password');
const login_btn = document.getElementById('login-btn');
const loding = document.getElementById('loding')
const loding_img = document.getElementById('loding-img')

const inputs = document.querySelector('input')

const storedUserData = JSON.parse(localStorage.getItem('userdata')) || {};
username.value = storedUserData.username || "";
password.value = storedUserData.password || "";

login_btn.addEventListener('click' , function(e){
    e.preventDefault();
    let userdata = {
        username : username.value,
        password : password.value,
    }
    if(userdata.password === ""){
        password.style.border = '2px solid red';
    }
    if(userdata.username === ""){
        username.style.border = '2px solid red';
    }
    if(userdata.username !== "" && userdata.password !== ""){
        setInterval(() => {
            loding_img.style.display = "block";
            localStorage.removeItem('userdata');
            window.location.pathname = 'index.html';
         }, 500);
    }
})

inputs.addEventListener('change' , function(e){
    username.style.border = 'none';
    password.style.border = 'none';
})