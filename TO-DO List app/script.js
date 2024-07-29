document.getElementById("add_button").addEventListener('click', function() {
    const task = document.getElementById("task_input");
    const input_text = task.value.trim();
    if (input_text === "") {
        alert("Please Enter Task!");
        return;
    }
    const tasks_list = document.getElementById("tasks_list");
    const li = document.createElement("li");
    
    li.innerHTML = `
    <span>${input_text}</span>
    <div class="buttons">
        <button onclick="edit_task(this)"><i class="fas fa-edit"></i></button>
        <button onclick="remove_Task(this)"><i class="fas fa-trash"></i></button>
    </div>`;
    tasks_list.appendChild(li);
    task.value = "";
});

function remove_Task(button) {
    const task = document.getElementById("tasks_list");
    task.removeChild(button.parentElement.parentElement);
}

function edit_task(button) {
    const task_item = button.parentElement.parentElement;
    const span = task_item.querySelector('span');
    const text = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = text;
    input.addEventListener('blur', function() {
        span.textContent = input.value.trim();
        task_item.replaceChild(span, input);
    });

    task_item.replaceChild(input, span);
    input.focus();
}
