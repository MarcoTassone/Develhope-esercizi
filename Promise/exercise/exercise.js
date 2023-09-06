const number = 15;

function myPromise(num) {
  return new Promise((resolve, reject) => {
    if(num > 10){
        resolve("il numero è maggiore di 10");
    }else{
        reject("il numero non è maggiore di 10");
    }
  });
}

myPromise(number)
.then((data) => console.log(data))
.catch((err) => console.log(err))