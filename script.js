const ham= document.querySelector('.humburger');
const navL= document.querySelector('.nav-links');
const links= document.querySelectorAll('.nav-links a');

//toogle menu
function togglemenu() {
    ham.classList.toggle('active');
    navL.classList.toggle('active');
}

//close menu - Not Using Now
function closeMenu() {
    ham.classList.remove('active');
    navL.classList.remove('active');
}

//event listner
ham.addEventListener('click', togglemenu);