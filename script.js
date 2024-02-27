function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();

    if (!newTask) {
        alert("Please enter a task!");
        return;
    }

    const tasksList = document.getElementById('tasksList');
    const li = document.createElement('li');
    li.textContent = newTask;

    // Optional: Add a delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        tasksList.removeChild(li);
    };
    li.appendChild(deleteBtn);

    tasksList.appendChild(li);

    taskInput.value = '';
}
