// Obtener elementos del DOM
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const data = document.querySelector('#data');
const deleteButton = document.querySelector('#delete');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  
  
  const userData = {
    name: nameValue,
    email: emailValue
  };
  
  const newListItem = document.createElement('li');
newListItem.textContent = `Nombre: ${userData.name} - Correo electrónico: ${userData.email}`;
data.appendChild(newListItem);


localStorage.setItem('userData', JSON.stringify(userData));
 showData();
});


function showData() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    dataPara.textContent = `Nombre: ${userData.name} - Correo electrónico: ${userData.email}`;
  } else {
    dataPara.textContent = 'No hay datos guardados.';
  }
}


function deleteData() {
  localStorage.removeItem('userData');
  dataPara.textContent = 'No hay datos guardados.';
}


showData();


deleteButton.addEventListener('click', deleteData);



deleteButton.addEventListener('click', deleteName);

showName();
