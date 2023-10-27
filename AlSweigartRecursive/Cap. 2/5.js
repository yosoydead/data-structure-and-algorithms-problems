// exponent with power rule
function exponentWithPowerRule(a, n) {
  let stack = [];

  while (n > 1) {
    if (n % 2 === 0) {
      stack.push("square");
      n = Math.floor(n / 2);
    } else {
      n -= 1;
      stack.push("multiply");
    }
  }

  let res = a;

  while (stack.length > 0) {
    let op = stack.pop();
    if (op === "multiply") {
      result = result * a;
    } else {
      result = result * result;
    }
  }
}
