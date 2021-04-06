// probably not the most efficient method

function paul(x){
  let totalMisery = 0;
  x.forEach( (activity) => {
    if (activity == 'kata') totalMisery +=5;
    if (activity == 'Petes kata') totalMisery +=10;
    if (activity == 'life') totalMisery +=0;
    if (activity == 'eating') totalMisery +=1;
  })
  
  if (totalMisery >= 100) {
    return 'Miserable!';
  } else if (totalMisery <100 && totalMisery >=70) {
    return 'Sad!';
  } else if (totalMisery <70 && totalMisery >=40) {
    return 'Happy!';
  } else if (totalMisery<40) {
    return 'Super happy!'
  }
  
}
