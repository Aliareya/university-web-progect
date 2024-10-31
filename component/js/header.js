const header = document.querySelector('header');
let mobileMenu = 1; 

function updateHeader() {
    header.innerHTML = ""; 
    const screenWidth = window.innerWidth;
    const newHeader = document.createElement('div');
    newHeader.className = "header-info";
    newHeader.innerHTML = `
        <div class="logo">
            <img src="./image/logo.png" width="70" height="70">
        </div>
        ${screenWidth > 850 ? `
            <div class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Departments</a></li>
                <li><a href="#">Doctors</a></li>
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

    const toggle = document.getElementById('mobile-toggle');
    if (toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            mobileMenu = mobileMenu === 1 ? 2 : 1; 

            toggle.src = mobileMenu === 1 ? "./image/menu.png" : "./image/close.png";
        });
    }
}

updateHeader();

window.addEventListener('resize', updateHeader);
