function addArrays(array1, array2) {
  let newArray = [];
  let error = new Error('Error')
  if (array1.length !== array2.length) {
    throw error;
  }
  
  for (let i=0; i<array1.length; i++) {
    newArray.push(array1[i] + array2[i]);
  }
  
  return newArray;
}
