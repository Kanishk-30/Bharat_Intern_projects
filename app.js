function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  const newTask = taskInput.value.trim();
  
  if (newTask !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = toggleTask;

    li.style.backgroundColor = generateRandomColor(); // Generate random color

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(newTask));
    li.classList.add('dynamic-color');

    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function toggleTask() {
  const listItem = this.parentNode;
  listItem.classList.toggle('completed');
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createNewList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
}

function deleteList() {
  const confirmation = confirm('Are you sure you want to delete the entire list?');
  if (confirmation) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  }
}
