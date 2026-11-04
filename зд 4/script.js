var BASE = 'https://jsonplaceholder.typicode.com';

// оставляем только невыполненные задачи
function filterTodos(todos) {
  return todos.filter(function (todo) {
    return todo.completed === false;
  });
}

// зд 4: /todos, только completed = false (промисы)
function getTodos() {
  fetch(BASE + '/todos')
    .then(function (response) {
      return response.json();
    })
    .then(function (todos) {
      console.log('зд 4', filterTodos(todos));
    });
}

getTodos();
