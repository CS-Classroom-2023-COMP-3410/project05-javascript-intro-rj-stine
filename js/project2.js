document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const filterTasks = document.getElementById('filterTasks');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let filteredTasks = tasks;

    const renderTasks = () => {
        taskList.innerHTML = ''; // Clear current tasks before rendering
        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : ''; // Mark task as completed if needed
            li.setAttribute('draggable', true);
            li.setAttribute('data-index', index);
    
            li.innerHTML = `
                <span>${task.text}</span>
                <div class="task-actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
    
            // Add the toggle button dynamically
            const toggleButton = document.createElement('button');
            toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
            toggleButton.addEventListener('click', () => toggleTaskStatus(index));
            li.querySelector('.task-actions').appendChild(toggleButton);
    
            // Add drag-and-drop event listeners
            li.addEventListener('dragstart', dragStart);
            li.addEventListener('dragover', dragOver);
            li.addEventListener('drop', drop);
            li.addEventListener('dragend', dragEnd);
    
            taskList.appendChild(li);
        });
    };
    

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            saveTasks();
            filterTasksByStatus(); // Re-render tasks based on current filter
        }
    };

    const deleteTask = (index) => {
        // Remove task from the main array
        tasks.splice(index, 1);
        saveTasks();
        filterTasksByStatus(); // Reapply filter after deleting task
    };

    const toggleTaskStatus = (index) => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks(); // Save the updated task list
        filterTasksByStatus(); // Apply the current filter and re-render
    };

    const editTask = (index) => {
        const newText = prompt('Edit task:', tasks[index].text);
        if (newText !== null && newText.trim() !== '') {
            tasks[index].text = newText.trim();
            saveTasks();
            filterTasksByStatus(); // Re-render tasks based on current filter
        }
    };

    const filterTasksByStatus = () => {
        const filterValue = filterTasks.value;
    
        // Determine which tasks to show based on the filter
        if (filterValue === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filterValue === 'pending') {
            filteredTasks = tasks.filter(task => !task.completed);
        } else {
            filteredTasks = tasks; // "All" shows all tasks
        }
    
        // Render tasks based on the filtered list
        renderTasks();
    };

    const dragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
    };

    const dragOver = (e) => {
        e.preventDefault();
    };

    const drop = (e) => {
        e.preventDefault();
        const draggedIndex = e.dataTransfer.getData('text/plain');
        const targetIndex = e.target.closest('li').dataset.index;
        if (draggedIndex !== targetIndex) {
            const draggedTask = tasks.splice(draggedIndex, 1)[0];
            tasks.splice(targetIndex, 0, draggedTask);
            saveTasks();
            filterTasksByStatus(); // Re-render tasks after dragging
        }
    };

    const dragEnd = () => {
        // Reset any drag-related styles if needed
    };

    // Event delegation for delete and edit buttons
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.closest('li').dataset.index;
            deleteTask(index);
        } else if (e.target.classList.contains('edit-btn')) {
            const index = e.target.closest('li').dataset.index;
            editTask(index);
        }
    });

    addTaskBtn.addEventListener('click', addTask);
    filterTasks.addEventListener('change', filterTasksByStatus);

    // Initial render of tasks
    renderTasks();
});
