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
                <img src="./image/phone.png" width="30px" alt="">
                <h3>Phone</h3>
            </span>
            <span>
                <img src="./image/emergency.png" width="30px" alt="">
                <h3>Emargency</h3>
            </span>
            <span>
                <img src="./image/email.png" width="30px" alt="">
                <h3>Email</h3>
            </span>
            <span>
                <img src="./image/facebook.png" width="30px" alt="">
                <h3>Facebook</h3>
            </span>
            <span>
                <img src="./image/twitter.png" width="30px" alt="">
                <h3>Twitter</h3>
            </span>
        </div>
       </div>

`;
footer.appendChild(footer_content);
