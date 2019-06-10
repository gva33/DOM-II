// Your code goes here

// PREVENTING NAV LINKS FROM RELOADING PAGE
const nav = document.querySelector(".nav");

nav.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("nav link clicked");}
    );


// Flips the logo by clicking on it
const navLogoHeading = document.querySelector('.logo-heading');

navLogoHeading.addEventListener('dblclick', function (e) {
    e.target.style.transform = "rotate(180deg)";});

// Changes layout by dragging image
const s = document.querySelector('.content-section');

s.addEventListener('dragend', function () {
    s.classList.toggle('swap');});

// Zooms into image by clicking on it
const pic = document.querySelector('.content-destination img');

pic.addEventListener('click', function () {
    pic.classList.toggle('zoom');});

// Annoys the user by moving the nav items
const navA = document.querySelector('.nav');    

navA.addEventListener('mouseover', function () {
    navA.classList.toggle('annoy');});

// Enlarges font when mouse hovers over the paragraphs
const para = document.querySelectorAll('.content-pick p')

for (i=0; i<para.length; i++){
para[i].addEventListener('mousemove', function (e) {
    e.target.style.transform = "scale(1.1)";})};

// Returns font to normal size after hovering
const paranorm = document.querySelectorAll('.content-pick p')

for (i=0; i<paranorm.length; i++){
paranorm[i].addEventListener('mouseleave', function (e) {
e.target.style.transform = "scale(1)";})};

// Questions why the user will be copying from the page
const allP = document.querySelectorAll('p');

for (i=0; i<allP.length; i++){
    allP[i].addEventListener('copy',function(e){
        alert("Why are you copying this?!?");
    })
}

// Sends request after webpage is adjusted
window.addEventListener('resize', function(){
    alert("Please stop adjusting your window")
});