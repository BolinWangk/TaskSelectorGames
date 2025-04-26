const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const randomDisplay = document.getElementById('random-task-display');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  const li = document.createElement('li');
  li.innerHTML = `
    <span>🤖 ${taskText}</span>
    <button class="remove-btn" onclick="removeTask(this)">🔫</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
}

function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

function showRandomTask() {
  const tasks = Array.from(taskList.getElementsByTagName('li'));
  if (tasks.length === 0) {
    alert("Please add some tasks first.");
    return;
    
  }

  const randomIndex = Math.floor(Math.random() * tasks.length);
  const taskText = tasks[randomIndex].querySelector('span').textContent;
  randomDisplay.textContent = `SELECTED TASK: ${taskText}`;
  randomDisplay.style.display = 'block';
}




