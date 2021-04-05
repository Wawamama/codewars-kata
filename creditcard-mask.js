function maskify(cc) {
  //let regex = /\d(?=\d{4})/g; //would work if only digits are passed
  let regex = /.(?=.{4})/g;  //should match any character
  return cc.replace(regex, '#');
}
