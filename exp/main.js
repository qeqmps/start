function calc(operation, a, b) {
  switch(operation) {
    case "add":
      return a + b;
      break
    case "multi":
      return a * b
      break
    case "subtrack":
      return a - b
      break
    default:
      console.log("ti 4et slomal");
  }
  
  // if (operation === "add") { return a + b }
  // if (operation ==="multi") { return a * b}
  // if (operation === "subtrack") { return a - b}
}

let result = calc("add", 1, 2);
console.log(result);