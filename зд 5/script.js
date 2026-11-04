var BASE = 'https://jsonplaceholder.typicode.com';

// сортировка постов по убыванию длины title
function sortPosts(posts) {
  posts.sort(function (a, b) {
    return b.title.length - a.title.length;
  });
  return posts;
}

// зд 5: /posts, сортировка по убыванию длины title (async/await)
async function getPosts() {
  var response = await fetch(BASE + '/posts');
  var posts = await response.json();
  console.log('зд 5', sortPosts(posts));
}

getPosts();
