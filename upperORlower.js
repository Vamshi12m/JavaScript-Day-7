function alphabet(letter){
    if(letter==letter.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}
var result=alphabet("A");
console.log(result);