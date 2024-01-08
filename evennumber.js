const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log('The even number array is');
number.forEach (function(number){
if (number %2 === 0 ){
    console.log(number);
}
});
