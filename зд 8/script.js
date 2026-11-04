var BASE = 'https://jsonplaceholder.typicode.com';

// оставляем только невыполненные задачи
function filterTodos(todos) {
  return todos.filter(function (todo) {
    return todo.completed === false;
  });
}

// зд 8: /todos, только completed = false (async/await)
async function getTodos() {
  var response = await fetch(BASE + '/todos');
  var todos = await response.json();
  console.log('зд 8', filterTodos(todos));
}

getTodos();
