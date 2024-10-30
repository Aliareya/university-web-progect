let man = document.querySelector('header');

function updateHeader() {
    // Clear any existing header content
    man.innerHTML = "";

    const screenWidth = window.innerWidth;

    let nweheader = document.createElement('div');
    nweheader.className = "header-info";
    nweheader.innerHTML = `
        <div class="logo">
            <img src="./image/logo.png" width="70" height="70">
        </div>
        ${screenWidth > 800 ? `
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
            <div class="mobile-menu">Mobile</div>
        `}
    `;

    man.appendChild(nweheader);
}

// Initialize the header on page load
updateHeader();

// Update the header on window resize
window.addEventListener('resize', updateHeader);
