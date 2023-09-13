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

saveLocalStorage(user);