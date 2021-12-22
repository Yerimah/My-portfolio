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

let cardWorks = [

 {
     id: "1",
     name: "Professional Art",
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
     technologies: ['html', 'bootstrap', 'Ruby'],
     image: "images/popup-image.png",
     liveLink: "#",
     sourceLink: "https://github.com/Yerimah/My-portfolio.git"
 },

 {
    id: "2",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "images/popup-image.png",
    liveLink: "#",
    sourceLink: "https://github.com/Yerimah/My-portfolio.git"
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
    sourceLink: "https://github.com/Yerimah/My-portfolio.git"
 },

 {
    id: "5",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "background: url(./images/portfolio.png)",
    liveLink: "#",
    sourceLink: "https://github.com/Yerimah/My-portfolio.git"
 },

 {
    id: "6",
    name: "Professional Art",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: "background: url(./images/portfolio.png)",
    liveLink: "#",
    sourcelink: "https://github.com/Yerimah/My-portfolio.git"
    
 }
];

const projectButton = document.querySelectorAll('.card-btn');
const windowContainer = document.createElement('div');
const container = document.createElement('div');
function closeIt() {
  document.body.removeChild(windowContainer);
  window.location.reload();
}

projectButton.forEach((el) => el.addEventListener('click', () => {
  const displayedArray = cardWorks.filter((projectId) => projectId.id === el.getAttribute('id'));

  for (let i = 0; i < displayedArray.length; i += 1) {
    document.body.appendChild(windowContainer);
    windowContainer.classList.add('popup-window');
    windowContainer.appendChild(container);
    container.classList.add('pop-up');
    const img = document.createElement('img');
    img.classList.add('pop-image');
    img.setAttribute('src', displayedArray[i].image);

    container.appendChild(img);

    const title = document.createElement('h3');
    title.classList.add('pop-title');
    title.textContent = displayedArray[i].name;
    container.appendChild(title);

    const ul = document.createElement('ul');
    ul.classList.add('pop-list');
    container.appendChild(ul);
    const listItem1 = document.createElement('li');
    listItem1.textContent = displayedArray[i].technologies[0];
    listItem1.classList.add('pop-cell');
    const listItem2 = document.createElement('li');
    listItem2.textContent = displayedArray[i].technologies[1];
    listItem2.classList.add('pop-cell');
    const listItem3 = document.createElement('li');
    listItem3.textContent = displayedArray[i].technologies[2];
    listItem3.classList.add('pop-cell');
    ul.appendChild(listItem1);
    ul.appendChild(listItem2);
    ul.appendChild(listItem3);

    const description = document.createElement('p');
    description.classList.add('pop-description');
    description.textContent = displayedArray[i].description;
    container.appendChild(description);

    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link-container');
    container.appendChild(linkContainer);

    const liveLink = document.createElement('a');
    const linkText1 = document.createTextNode('See Live');
    const liveIcon = document.createElement('img');
    liveIcon.classList.add('popIcon');
    liveIcon.src = 'images/livepop.png';
    liveIcon.alt = ' ';
    liveLink.setAttribute('target', '_blank');
    liveLink.appendChild(linkText1);
    liveLink.appendChild(liveIcon);
    liveLink.href = displayedArray[i].liveLink;
    liveLink.classList.add('pop');

    const sourceLink = document.createElement('a');
    const linkText2 = document.createTextNode('See source');
    const sourceIcon = document.createElement('img');
    sourceIcon.classList.add('popIcon');
    sourceIcon.src = 'images/popgit.png';
    sourceIcon.alt = ' ';
    sourceLink.setAttribute('target', '_blank');
    sourceLink.appendChild(linkText2);
    sourceLink.appendChild(sourceIcon);
    sourceLink.href = displayedArray[i].sourceLink;
    sourceLink.classList.add('pop');
    linkContainer.append(liveLink, sourceLink);

    const closeTag = document.createElement('img');
    closeTag.src = 'images/closetoggle.png';
    closeTag.alt = ' ';
    closeTag.classList.add('pop-close');
    container.appendChild(closeTag);

    closeTag.onclick = closeIt;
  }
}));
