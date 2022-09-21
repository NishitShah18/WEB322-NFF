// Author : Ngshah3

//is a non-negative integer and initialized with 1
let privateCounter = 1;

//The module’s three functions:

//1
module.exports.multiply = function (num) {
  privateCounter = privateCounter * num;
  return;
};

//2
module.exports.divide = function (num) {
  privateCounter = privateCounter / num;

  if (privateCounter < 1) {
    privateCounter = 1;
  }

  return;
};

//3
module.exports.value = function () {
  return privateCounter;
};
