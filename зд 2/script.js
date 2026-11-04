var BASE = 'https://jsonplaceholder.typicode.com';

// сортировка комментариев по имени
function sortComments(comments) {
  comments.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return comments;
}
// запрос данных с коллбэком
function getData(path, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", BASE + path);
  xhr.onload = function () {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

// зд 2: /comments, сортировка по имени (коллбэки)
function getComments() {
  getData('/comments', function (comments) {
    console.log('зд 2', sortComments(comments));
  });
}

getComments();
