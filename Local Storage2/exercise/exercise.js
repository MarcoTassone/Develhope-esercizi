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
    const json = JSON.stringify(user);
    const get = JSON.parse(json)

    localStorage.getItem(get);

    console.log(get);
  } catch (error) {
    console.error(error);
  }
}

getFromLocalStorage(user);

