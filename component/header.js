let man = document.querySelector('header');
let showpage;
let name;

function setpage(value) {
    showpage = value;
}

if (window.location.pathname === '/shop.html') {
    setpage('/home.html');
    name = 'Home'; 
} else if (window.location.pathname === '/home.html') {
    setpage('/shop.html');
    name = 'Shop';
}

let nweheader = document.createElement('div');
nweheader.innerHTML = `
    <div id="header">
        <h1 style="text-align: center;">Header</h1>
        <a href="${showpage}">${name}</a>
    </div>
`;
man.appendChild(nweheader);
