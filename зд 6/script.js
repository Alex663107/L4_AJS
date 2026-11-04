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

// зд 6: /comments, сортировка по имени (async/await)
async function getComments() {
  var response = await fetch(BASE + '/comments');
  var comments = await response.json();
  console.log('зд 6', sortComments(comments));
}

getComments();
