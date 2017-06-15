
console.log("isEven()");

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("factorial()");

function factorial(number) {
  var result = 1;

  for (var i = 1; i <= number; i++) {
    result*= i;
    console.log(result);
  };

  return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log("kebabToSnake()");

function kebabToSnake(kebabCased) {
  return kebabCased.replace("-", "_");
}

console.log(kebabToSnake('hello-world'));
console.log(kebabToSnake('dogs-are-awesome'));
console.log(kebabToSnake('blah'));
