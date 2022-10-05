function toPositiveNumber(x) {
  if (isNaN(x)) {
    throw new Error("not a number!");
  }
  if (Number(x) <= 0) {
    throw new Error("0 or a negative number!");
  }
  return Number(x);
}

let num = NaN,
  input = document.getElementById("#input").value;

try {
  num = toPositiveNumber(input);
} catch (err) {
  console.log("Error: the input is not a number!");
}
