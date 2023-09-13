const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocalStorage(user){
  try {
    const json = JSON.stringify(user);

    localStorage.setItem("user", json);

  } catch (error) {
    console.error(error);
  }
}


function getFromLocalStorage(user){
  try {
    const parse = JSON.stringify(user)

    localStorage.getItem(parse);

    console.log(parse);
  } catch (error) {
    console.error(error);
  }
}

getFromLocalStorage(user);

