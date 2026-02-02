exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.mul = (a, b) => a * b;
exports.div = (a, b) => {
  if (b === 0) return "Cannot divide by zero";
  return a / b;



  module.exports={
    add,sub,mul,div
  }
};