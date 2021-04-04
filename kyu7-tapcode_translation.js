function tapCodeTranslation(text) {
  let letters = text.toUpperCase().split('');
  let finalString = '';
    
  const lines = [
    ['A', 'B', 'C', 'K', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
  ];
  
  const columns = [
    ['A', 'F', 'L', 'Q', 'V'],
    ['B', 'G', 'M', 'R', 'W'],
    ['C', 'K', 'H', 'N', 'S', 'X'],
    ['D', 'I', 'O', 'T', 'Y'],
    ['E', 'J', 'P', 'U', 'Z']   
  ];
  
  letters.forEach( (letter) => {
    let lineIndex, columnIndex, lineDots = '.', columnDots ='.';
    
    //find corresponding line
    for (let i=0; i<lines.length; i++) {
      if (lines[i].includes(letter)) {
        lineIndex = lines.indexOf(lines[i])+1
        
      }
    }
    // find corresponding column
    for (let j=0; j<columns.length; j++) {
      if (columns[j].includes(letter)) {
        columnIndex = columns.indexOf(columns[j])+1
      }
    }
    
    // add the taps for each letter
    lineDots = lineDots.repeat(lineIndex);
    columnDots = columnDots.repeat(columnIndex);
    finalString += lineDots + ' ' + columnDots + ' ';
    
  })
 
  return(finalString.trim())
 
  
}
