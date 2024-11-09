let man = document.querySelector("header");

const screenWidth = window.innerWidth;
console.log("Screen width is: " + screenWidth + "px");

let man1 = 1;
let nweheader = document.createElement("div");
nweheader.className = "header-info";
nweheader.innerHTML = `
         <div class="logo">
           <img src="./image/logo.png" width="70" height="70">
         </div>
         <div class="menu">
           <li><a href="#">Home</a></li>
           <li><a href="about.html">About Us</a></li>
           <li><a href="#">Departments</a></li>
           <li><a href="#">Doctors</a></li>
           <li><a href="#">Emergency</a></li>
           <li><a href="#">Pharmacy</a></li>
           ${
             screenWidth !== 1024
               ? '<li id="last-menu"><a href="#">Schedule an appointment</a></li>'
               : '<li id="last-menu"><a href="#">Get an appointment</a></li>'
           }
         </div>
`;

man.appendChild(nweheader);
