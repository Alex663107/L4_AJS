var BASE = 'https://jsonplaceholder.typicode.com';

// оставляем только нужные поля у пользователей
function cutUsers(users) {
  var result = [];
  for (var i = 0; i < users.length; i++) {
    result.push({
      id: users[i].id,
      name: users[i].name,
      username: users[i].username,
      email: users[i].email,
      phone: users[i].phone,
    });
  }
  return result;
}

// зд 7: /users, только нужные поля (async/await)
async function getUsers() {
  var response = await fetch(BASE + '/users');
  var users = await response.json();
  console.log('зд 7', cutUsers(users));
}

getUsers();
