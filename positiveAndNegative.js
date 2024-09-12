function positive(number){
    if(number>0){
        return true;
    }
    else if(number<0){
        return false;
    }
    else if(number==0){
        return "Zero";
    }
    else{
        return "check the number you have entered"
    }
}
var result=positive(-22);
console.log(result);