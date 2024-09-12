function divisible(number){
    if(number%3 && number%5){
        return true;
    }
    else{
        return false;
    }
}
var result=divisible(20);
console.log(result);