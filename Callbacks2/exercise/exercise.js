
function repeatHello(callback){
    setInterval(() => callback(), 1000);
}

function callback(){
    console.log("Hello");
}

repeatHello(callback);

// usiamo l'arrow function per convenzione e anche perché serve a rendere il codice più pulito