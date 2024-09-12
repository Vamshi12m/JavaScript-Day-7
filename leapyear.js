function leapYear(year){
    if(year%4==0){
        return true;
    }
    else{
        return false;
    }
}
var result=leapYear(2036);
console.log(result);