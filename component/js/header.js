const header = document.querySelector('header');
let mobileMenu = "hide"; 

function updateHeader() {
    header.innerHTML = ""; 
    const screenWidth = window.innerWidth;
    
    const newHeader = document.createElement('div');
    newHeader.className = "header-info";
    newHeader.innerHTML = `
        <div class="logo">
            <img src="./image/logo.png" width="70" height="70">
        </div>
        ${screenWidth > 900 ? `
            <div class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="department.html">Departments</a></li>
                <li><a href="doctor.html">Doctors</a></li>
                <li><a href="#">Emergency</a></li>
                <li><a href="#">Pharmacy</a></li>
                <li id="last-menu"><a href="#">Schedule an appointment</a></li>
            </div>
        ` : `
            <div class="mobile-menu">
                <img id="mobile-toggle" src="./image/menu.png" width="28" height="28">
            </div>
        `}
    `;

    header.appendChild(newHeader);

    const mobileMenuContent = document.createElement('div');
    mobileMenuContent.id = "mobile-menu-content";
    mobileMenuContent.className = "mobile-menu-content";
    mobileMenuContent.style.display = mobileMenu === "show" ? "flex" : "none";
    mobileMenuContent.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="department.html">Departments</a></li>
        <li><a href="doctor.html">Doctors</a></li>
        <li><a href="#">Emergency</a></li>
        <li><a href="#">Pharmacy</a></li>
        <li id="last-mobail-menu"><a href="#">Schedule an appointment</a></li>
    `;
    
    header.appendChild(mobileMenuContent);

    const toggle = document.getElementById('mobile-toggle');
    if (toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            mobileMenu = mobileMenu === "hide" ? "show" : "hide"; 
            toggle.src = mobileMenu === 'hide' ? "./image/menu.png" : "./image/close.png";
            mobileMenuContent.style.display = mobileMenu === "show" ? "flex" : "none";
        });
    }
}

updateHeader();

window.addEventListener('resize', updateHeader);

