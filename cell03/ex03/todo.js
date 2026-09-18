const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

window.onload = function() {
    loadTodoList();
};

newBtn.addEventListener('click', function() {
    const text = prompt('Please enter a new TO DO:');
    if (text && text.trim() !== '') {
        createTodoItem(text.trim());
        saveTodoList();
    }
});

function createTodoItem(text) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function() {
        const isConfirmed = confirm('remove this TO DO item?');
        if (isConfirmed) {
        todoDiv.remove();
            saveTodoList();
        }
    });

    ftList.insertBefore(todoDiv, ftList.firstChild);
}
function saveTodoList() {
    const todos = [];
    const items = ftList.children;
    
    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    const jsonString = encodeURIComponent(JSON.stringify(todos));
    document.cookie = `ft_todo=${jsonString}; path=/; max-age=${7 * 24 * 60 * 60}`;
}

function loadTodoList() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('ft_todo='));

    if (todoCookie) {
        const cookieValue = todoCookie.split('=')[1];
        const todos = JSON.parse(decodeURIComponent(cookieValue));

        for (let i = todos.length - 1; i >= 0; i--) {
            createTodoItem(todos[i]);
        }
    }
}