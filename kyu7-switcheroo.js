function switcheroo(x){
  let newString;
  let array = x.split('');
  for (let i=0; i<array.length; i++) {
    if (array[i] == 'a') {
      array.splice(i, 1, 'b')
    }
     else if (array[i] == 'b') {
      array.splice(i, 1, 'a')
    }
  }
  return array.join('');
}
