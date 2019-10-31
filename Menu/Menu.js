

/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function createMenu (arr) {
  const menu = document.createElement('div');
  const options = document.createElement('ul');
  

  menu.append(options);

  menu.classList.add('menu');
  options.classList.add('ul');
  options.textContent = [];
  
  arr.forEach(i => {
    let menuItem = document.createElement('li');
    menuItem.textContent = i;
    menuItem.classList.add('li')
    options.append(menuItem);
  });
  
  const menuBtn = document.querySelector('.menu-button');
  


  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');

  })

  return menu;
  
}


const header = document.querySelector('.header');

header.append(createMenu(menuItems));






