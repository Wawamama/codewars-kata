// Oh boy this is the longest function you could write for a simple task... couldn't find any other way 

function coolString(s) {
  let regex = /^[A-Za-z]*$/g;
  if (!regex.test(s)) return false;
  
  let result;
  
  let isUpperCase = (letter) => letter == letter.toUpperCase();
  let isLowerCase = (letter) => letter == letter.toLowerCase();
  let arr = s.split('');
  
  let oddLetters = arr.filter( (letter, index) => index%2 == 0);
  let evenLetters = arr.filter( (letter, index) => index%2 !== 0);
  
  if (oddLetters.every(isUpperCase) && evenLetters.every(isLowerCase)) {
    result = true;
  } else if (oddLetters.every(isLowerCase) && evenLetters.every(isUpperCase)) {
    result = true;
  } else {
    result = false;
  }
  
  return result;
  }

