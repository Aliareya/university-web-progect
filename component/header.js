let man = document.querySelector('header');

let nweheader = document.createElement('div');
nweheader.className="header-info";
nweheader.innerHTML = `
         <div class="logo">
           <img src="./image/logo.png" width="70" height="70">
         </div>
         <div class="menu">
           <li><a href="#">Home</a></li>
           <li><a href="#">About Us</a></li>
           <li><a href="#">Departments</a></li>
           <li><a href="#">Doctors</a></li>
           <li><a href="#">Emergency</a></li>
           <li><a href="#">Pharmacy</a></li>
           <li><a href="#">Contact Us</a></li>
           <li id="last-menu"><a href="#">Schedule an appointment</a></li>
         </div>
`;
man.appendChild(nweheader);
