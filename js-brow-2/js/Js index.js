let tasks = [];
let id = 1;

const form = document.querySelector('#addButton');
const input = document.querySelector('#new-task-input');
const list = document.querySelector('#listItems');
const deleteButton = document.querySelector('#deleteButton');
const completedFilter = document.getElementById('completed-filter');
const pendingFilter = document.getElementById('pending-filter');

let taskId = 0;

// Función para filtrar las tareas
function filterTasks() {
  const tasks = document.querySelectorAll('#listItems li');
  tasks.forEach((task) => {
    if (completedFilter.checked && !task.classList.contains('completed')) {
      task.style.display = 'none';
    } else if (pendingFilter.checked && task.classList.contains('completed')) {
      task.style.display = 'none';
    } else {
      task.style.display = 'flex';
    }
  });
}

completedFilter.addEventListener('click', filterTasks);
pendingFilter.addEventListener('click', filterTasks);

// Agregar y quitar la clase "active" a los botones de filtro
completedFilter.addEventListener('click', () => {
  completedFilter.classList.add('active');
  pendingFilter.classList.remove('active');
  filterTasks();
});

pendingFilter.addEventListener('click', () => {
  completedFilter.classList.remove('active');
  pendingFilter.classList.add('active');
  filterTasks();
});

// Función para crear un nuevo item de tarea
function createNewTaskElement(task, id) {
  const listItem = document.createElement('li');
  listItem.id = `task-${id}`;
  
  // Crear el input checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', handleCheckTask);
  listItem.appendChild(checkbox);
  
  const title = document.createElement('span');
  title.innerText = task;
  listItem.appendChild(title);
  
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Eliminar';
  deleteButton.addEventListener('click', handleDelete);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

// Función para agregar una nueva tarea a la lista
function addTask(event) {
  event.preventDefault();
  if (!input.value) return; // si el input esta vacío no hacer nada
  const listItem = createNewTaskElement(input.value, ++taskId);
  list.appendChild(listItem);
  input.value = '';
}

// Función para eliminar una tarea de la lista
function handleDelete(event) {
  const listItem = event.target.parentNode;
  list.removeChild(listItem);
}

// Función para marcar una tarea como completada
function handleCheckTask(event) {
  const listItem = event.target.parentNode;
  listItem.classList.toggle('completed');
}

function handleSubmit(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task-input');
  const taskName = newTaskInput.value.trim();
  
  if (!taskName) return; 
  
  const newTask = createTask(taskName);
  list.appendChild(newTask);
  newTaskInput.value = '';
}


// Agregar un evento al formulario para manejar la creación de nuevas tareas
form.addEventListener('submit', addTask);


// Agregar un evento al botón para eliminar tareas completadas
deleteButton.addEventListener('click', () => {
  const completedItems = document.querySelectorAll('.completed');
  completedItems.forEach(item => list.removeChild(item));
});





