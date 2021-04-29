function vowelIndices(word){
  let output = [];
  let arr = word.split('');
  let regex = /[a|e|i|o|u|y|A|E|I|O|U|Y]/;
  arr.forEach( (letter, index) => {
    if (regex.test(letter)) output.push(index+1);
  })
  
 return output
}
