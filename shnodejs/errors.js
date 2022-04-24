// an exception
function divide(dividend, divisor) {
    if (divisor == 0){
 return new Error("Cannot divide by zero");
    }
    return dividend/divisor;
}
 try{
    console.log(divide(7,0));
} catch(e) {
    console.error("You divided by zero. Change your denominatot!");
}
