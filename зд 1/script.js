var BASE = 'https://jsonplaceholder.typicode.com';

// сортировка постов по убыванию длины title
function sortPosts(posts) {
  posts.sort(function (a, b) {
    return b.title.length - a.title.length;
  });
  return posts;
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

// зд 1: /posts, сортировка по убыванию длины title (коллбэки)
function getPosts() {
  getData('/posts', function (posts) {
    console.log('зд 1', sortPosts(posts));
  });
}

getPosts();
