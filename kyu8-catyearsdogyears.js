var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let arr = [];
  let catYears = 15;
  let dogYears = 15;
  
  if (humanYears <=1) {
    arr.push (humanYears, catYears, dogYears);
    return arr;
  }
  if (humanYears == 2) {
    catYears +=9;
    dogYears +=9;
    arr.push (humanYears, catYears, dogYears);
    return arr;
  }
  if (humanYears > 2) {
      catYears = 24 + (4* (humanYears-2));
      dogYears = 24 + (5* (humanYears-2));
      arr.push (humanYears, catYears, dogYears);
      return arr;
    
  }
  
}
