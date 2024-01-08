const number = [1,2,3,4,5,6,7,8,9,10];
console.log('The even number array is');
number.forEach (function(number){
if (number %2 === 0 ){
    console.log(number);
}
});
