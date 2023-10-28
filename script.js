const todo_list = document.querySelector('#to-do-list');
const  taskInput= document.querySelector('#task-input');

todo_list.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = taskInput.value 
    console.log(taskText);
})