function maskify(cc) {
  let regex = /\d(?=\d{4})/g;
  return cc.replace(regex, '#');
}
