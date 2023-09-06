
const isLogged = true;

function isLoggedIn(isLogged) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged === true) {
        resolve(Math.random());
      } else {
        reject(new Error("There is an error"));
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
        reject(new Error("The user does not exist"));
      }
    }, 2000);
  });
}

isLoggedIn(isLogged)
  .then((val) => userDetails(val))
  .then((id) => console.log(id))
  .catch((err) => console.log(err))
  .finally(() => console.log("This will always run, even if there is an error"))
