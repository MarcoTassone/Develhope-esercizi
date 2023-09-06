
function repeatHello(callback){
    let hello = setInterval(() => callback(), 1000);
    setTimeout(() => clearInterval(hello), 5000);
}

function callback(){
    console.log("Hello");
}

repeatHello(callback);