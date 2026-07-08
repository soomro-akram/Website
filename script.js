// ================================
// Typing Animation
// ================================

const words = [
    "Financial Analyst",
    "Business Strategist",
    "Accountant",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    currentWord = words[wordIndex];

    if (isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex--);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================================
// Mobile Menu
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


// ================================
// Sticky Navbar
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(

".hero-content,.hero-image,.about-container,.skill-card,.project-card,.edu-card,.contact-container"

);

function reveal() {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// Contact Form Validation
// ================================

const form = document.querySelector("form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector("input[type='text']").value.trim();

const email = form.querySelector("input[type='email']").value.trim();

const message = form.querySelector("textarea").value.trim();

if(name==="" || email==="" || message===""){

alert("Please fill all required fields.");

return;

}

alert("Message Sent Successfully!");

form.reset();

});

}


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ================================
// Hover Effect on Project Cards
// ================================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// ================================
// Current Year in Footer
// ================================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Muhammad Subhan. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully 🚀");