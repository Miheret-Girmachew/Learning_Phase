interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

let tasks: Todo[] = [];

function addTask(text: string): void {
    const newTask: Todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    displayTasks();
}

function deleteTask(id: number): void {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

function displayTasks(): void {
    const tasksList = document.getElementById('tasks_list') as HTMLUListElement;
    tasksList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="buttons">
                <button onclick="editTask(${task.id})"><i class="fas fa-edit"></i></button>
                <button onclick="deleteTask(${task.id})"><i class="fas fa-trash"></i></button>
            </div>`;
        tasksList.appendChild(li);
    });
}

function editTask(id: number): void {
    const task = tasks.find(task => task.id === id);
    if (!task) return;
    const taskItem = document.querySelector(`li:nth-child(${tasks.indexOf(task) + 1})`) as HTMLLIElement | null;
    if (!taskItem) return;
    const span = taskItem.querySelector('span') as HTMLSpanElement | null;
    if (!span) return;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.text;
    input.addEventListener('blur', function() {
        task.text = input.value.trim();
        displayTasks();
    });
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            task.text = input.value.trim();
            displayTasks();
        }
    });
    taskItem.replaceChild(input, span);
    input.focus();
}

document.getElementById("add_button")?.addEventListener('click', function() {
    const taskInput = document.getElementById("task_input") as HTMLInputElement;
    const inputText = taskInput.value.trim();
    if (inputText === "") {
        alert("Please Enter Task!");
        return;
    }
    addTask(inputText);
    taskInput.value = "";
});

(window as any).deleteTask = deleteTask;
(window as any).editTask = editTask;
