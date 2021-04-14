function oddOrEven(array) {
   if (array.length == 0) array = [0];
   let sum = array.reduce((a, b) => a+b);
   if ( sum%2 ==0) return 'even';
   return 'odd';
}
