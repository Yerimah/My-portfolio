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

const cardWorks = [

  {
    id: '1',
    name: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    listItem1: 'html',
    listItem2: 'bootstrap',
    listItem3: 'Ruby on rails',
    image: 'images/popup-image.png',
    liveLink: '#',
    sourceLink: 'https://github.com/Yerimah/My-portfolio.git',
  },

  {
    id: '2',
    name: 'Professional Art',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    listItem1: 'html',
    listItem2: 'bootstrap',
    listItem3: 'Ruby on rails',
    image: 'images/popup-image.png',
    liveLink: '#',
    sourceLink: 'https://github.com/Yerimah/My-portfolio.git',
  },

  {
    id: '3',
    name: 'Professional Art',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    listItem1: 'html',
    listItem2: 'bootstrap',
    listItem3: 'Ruby on rails',
    image: 'images/Calender.png',
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: '4',
    name: 'Professional Art',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    listItem1: 'html',
    listItem2: 'bootstrap',
    listItem3: 'Ruby on rails',
    image: 'images/tree.png',
    liveLink: '#',
    sourceLink: 'https://github.com/Yerimah/My-portfolio.git',
  },

  {
    id: '5',
    name: 'Professional Art',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    listItem1: 'html',
    listItem2: 'bootstrap',
    listItem3: 'Ruby on rails',
    image: 'images/portfolio.png',
    liveLink: '#',
    sourceLink: 'https://github.com/Yerimah/My-portfolio.git',
  },

  {
    id: '6',
    name: 'Professional Art',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    listItem1: 'html',
    listItem2: 'bootstrap',
    listItem3: 'Ruby on rails',
    image: 'images/Calender.png',
    liveLink: '#',
    sourcelink: 'https://github.com/Yerimah/My-portfolio.git',

  },
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
    const headContainer = document.createElement('div');
    container.insertBefore(headContainer, img);
    headContainer.className = 'headContainer';

    const ul = document.createElement('ul');
    ul.classList.add('pop-list');
    container.appendChild(ul);
    headContainer.append(title, ul);
    const listItem1 = document.createElement('li');
    listItem1.textContent = displayedArray[i].listItem1;
    listItem1.classList.add('pop-cell');
    const listItem2 = document.createElement('li');
    listItem2.textContent = displayedArray[i].listItem2;
    listItem2.classList.add('pop-cell');
    const listItem3 = document.createElement('li');
    listItem3.textContent = displayedArray[i].listItem3;
    listItem3.classList.add('pop-cell');
    ul.appendChild(listItem1);
    ul.appendChild(listItem2);
    ul.appendChild(listItem3);

    const description = document.createElement('p');
    description.classList.add('pop-description');
    description.textContent = displayedArray[i].description;
    container.appendChild(description);
    const btnTxtContainer = document.createElement('div');
    container.appendChild(btnTxtContainer);
    btnTxtContainer.className = 'btn-text';

    const imgTxtContainer = document.createElement('div');
    container.appendChild(imgTxtContainer);
    imgTxtContainer.className = 'img-text';

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
    btnTxtContainer.append(description, linkContainer);
    imgTxtContainer.append(btnTxtContainer, img);

    const closeTag = document.createElement('img');
    closeTag.src = 'images/closetoggle.png';
    closeTag.alt = ' ';
    closeTag.classList.add('pop-close');
    container.appendChild(closeTag);

    closeTag.onclick = closeIt;
  }
}));
