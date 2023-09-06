const isLogged = true;

function isLoggedIn(isLogged) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged === true) {
        resolve(Math.random());
      } else {
        reject("There is an error");
      }
    }, 1000);
  });
}

function userDetails(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0.5) {
        resolve(`{name: "John", age: 24}`);
      } else {
        reject("error");
      }
    }, 2000);
  });
}

isLoggedIn(isLogged)
  .then((val) => userDetails(val))
  .then((id) => console.log(id))
  .catch((err) => console.log(err))
