function sum({sum = true}, ...rest) {
    if(sum){
    return rest.reduce((a,b) => a + b);
    }
    else{
    return 0;
    }
}

console.log(sum({"sum": true},1, 2, 3, 4, 5));