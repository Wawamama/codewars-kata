const solution = (value) => {
  let padded = value.toString().padStart(5, '0');
  return `Value is ${padded}`
}
