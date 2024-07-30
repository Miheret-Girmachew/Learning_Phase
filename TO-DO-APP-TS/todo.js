var _a;
var tasks = [];
function addTask(text) {
    var newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    displayTasks();
}
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    displayTasks();
}
function displayTasks() {
    var tasksList = document.getElementById('tasks_list');
    tasksList.innerHTML = '';
    tasks.forEach(function (task) {
        var li = document.createElement('li');
        li.innerHTML = "\n            <span>".concat(task.text, "</span>\n            <div class=\"buttons\">\n                <button onclick=\"editTask(").concat(task.id, ")\"><i class=\"fas fa-edit\"></i></button>\n                <button onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fas fa-trash\"></i></button>\n            </div>");
        tasksList.appendChild(li);
    });
}
function editTask(id) {
    var task = tasks.find(function (task) { return task.id === id; });
    if (!task)
        return;
    var taskItem = document.querySelector("li:nth-child(".concat(tasks.indexOf(task) + 1, ")"));
    if (!taskItem)
        return;
    var span = taskItem.querySelector('span');
    if (!span)
        return;
    var input = document.createElement('input');
    input.type = 'text';
    input.value = task.text;
    input.addEventListener('blur', function () {
        task.text = input.value.trim();
        displayTasks();
    });
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            task.text = input.value.trim();
            displayTasks();
        }
    });
    taskItem.replaceChild(input, span);
    input.focus();
}
(_a = document.getElementById("add_button")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var taskInput = document.getElementById("task_input");
    var inputText = taskInput.value.trim();
    if (inputText === "") {
        alert("Please Enter Task!");
        return;
    }
    addTask(inputText);
    taskInput.value = "";
});
window.deleteTask = deleteTask;
window.editTask = editTask;
