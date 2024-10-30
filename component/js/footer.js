const footer = document.getElementById("footer");
let footer_content = document.createElement("div");
footer_content.className = "footer-content";
footer_content.innerHTML = `
   <div class="footer-info">
        <div class="hp-logo">
            <img src="./image/logo.png" width="180px" alt="">
            <div class="socila-link"></div>
        </div>
        <div class="contact-part">
            <span>
                <img src="./image/f7--phone-circle-fill.png" width="30px" alt="">
                <h3>Phone Number:</h3>
                <p>(060) 444 434 44</p>
            </span>
            <span>
                <img src="./image/mdi--car-emergency.png" width="30px" alt="">
                <h3>Emargency</h3>
                <p>(060) 444 434 44</p>
            </span>
            <span>
                <img src="./image/email.png" width="30px" alt="">
                <h3>Email</h3>
                <p>salamet_hospital@gmail.com</p>
            </span>
            <span>
                <img src="./image/fa6facebook.png" width="30px" alt="">
                <h3>Facebook</h3>
                <p>https://facebook.com/salamet</p>
            </span>
            <span>
                <img src="./image/twitter-circle-filled.png" width="30px" alt="">
                <h3>Twitter</h3>
                <p>x.com/salamet_hospital</p>
            </span>
        </div>
       </div>

`;
footer.appendChild(footer_content);
