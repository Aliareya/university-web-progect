const name = document.getElementById('S-name');
const username = document.getElementById('S-username');
const email = document.getElementById('S-email');
const password = document.getElementById('S-password');
const singnup_btn = document.getElementById('singnup-submit-btn');
const loding = document.getElementById('loding');


singnup_btn.addEventListener('click' , function(e){
   e.preventDefault();
   let userdate = {
        name : name.value,
        username : username.value,
        email : email.value,
        password : password.value
   }
   localStorage.setItem('userdata', JSON.stringify(userdate));
   console.log(userdate)
   loding.style.display="block";
   setInterval(() => {
      loding.style.display="none";
      window.location.pathname = 'login.html';
   }, 2000);
})