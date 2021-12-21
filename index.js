const hamburger = document.querySelector('#hamburger');
const closetog = document.querySelector('#togclose');
const toggleMenu = document.querySelector('.toggle-menu');

function show() {
  toggleMenu.style.display = 'flex';
  toggleMenu.style.top = '0';
}

function close() {
  toggleMenu.style.top = '-100%';
}

hamburger.addEventListener('click', show);
closetog.addEventListener('click', close);

document.querySelectorAll('.menu-list').forEach((link) => link.addEventListener('click', close));

let cardWorks = [{ 
    id: "1",
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    image: "./images/placeholder.png", alt: "first project image",
    liveLink: "#",
    sourceLink: "#"
},

 {
     id: "2",
     name: "Professional Art",
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
     technologies: ['html', 'bootstrap', 'Ruby'],
     image: "background: url(./images/portfolio.png)",
     liveLink: "#",
     sourceLink: "#"
 },

 {
    id: "3",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "background: url(./images/portfolio.png)",
    liveLink: "#",
    sourceLink: "#"
 },

 {
    id: "4",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "background: url(./images/portfolio.png)",
    liveLink: "#",
    sourceLink: "#"
 },

 {
    id: "5",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "background: url(./images/portfolio.png)",
    liveLink: "#",
    sourceLink: "#"
 },

 {
    id: "6",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "background: url(./images/portfolio.png)",
    liveLink: "#",
    sourceLink: "#"
 },

 {
    id: "7",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "background: url(./images/portfolio.png)",
    liveLink: "#",
    sourcelink: "#"
    
 }

]
