const menuContainer = document.createElement('ul');
menu.forEach(menuItem => {
    const li = document.createElement('li');
    const text = document.createTextNode(menuItem.name);
    li.appendChild(text);
  });
  menu.forEach(menuItem => {
    const li = document.createElement('li');
    const text = document.createTextNode(menuItem.name);
    li.appendChild(text);
  
    if (menuItem.items.length > 0) {
      const subMenu = document.createElement('ul');
      menuItem.items.forEach(subMenuItem => {
        const subLi = document.createElement('li');
        const subText = document.createTextNode(subMenuItem.name);
        subLi.appendChild(subText);
        subMenu.appendChild(subLi);
      });
      li.appendChild(subMenu);
    }
  
    menuContainer.appendChild(li);
  });
  document.body.appendChild(menuContainer);
  menu.forEach(menuItem => {
    const li = document.createElement('li');
    const text = document.createTextNode(menuItem.name);
    li.appendChild(text);
  
    if (menuItem.items.length > 0) {
      const subMenu = document.createElement('ul');
      menuItem.items.forEach(subMenuItem => {
        const subLi = document.createElement('li');
        const subText = document.createTextNode(subMenuItem.name);
        subLi.appendChild(subText);
        subMenu.appendChild(subLi);
      });
      li.appendChild(subMenu);
    }
  
    li.addEventListener('click', () => {
      li.classList.add('active');
    });
  
    menuContainer.appendChild(li);
  });
  menu.forEach(menuItem => {
    const li = document.createElement('li');
    const text = document.createTextNode(menuItem.name);
    li.appendChild(text);
  
    if (menuItem.items.length > 0) {
      const subMenu = document.createElement('ul');
      menuItem.items.forEach(subMenuItem => {
        const subLi = document.createElement('li');
        const subText = document.createTextNode(subMenuItem.name);
        subLi.appendChild(subText);
        subMenu.appendChild(subLi);
      });
  
      const subMenuButton = document.createElement('span');
      subMenuButton.innerHTML = '+';
      subMenuButton.addEventListener('click', () => {
        subMenu.classList.toggle('active');
      });
  
      li.appendChild(subMenuButton);
      li.appendChild
  