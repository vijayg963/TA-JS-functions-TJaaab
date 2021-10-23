// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogAge, humanYear = 7) {
  return dogAge * humanYear;
}
calculateDogAge(2); // 14
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, number) {
  const maxAge = 90;
  age = maxAge - age;
  let moviesPerMonth = 4 * number;
  let moviesPerYear = moviesPerMonth * 12;
  return `Number of movies to be watched in the left over year is ${
    age * moviesPerYear
  }`;
}
calculateMoviesToWatch(45, 5);
// Output:- ("Number of movies to be watched in the left over year is 10800");
/*


3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
  fahrenheit = celsius * 1.8 + 32;
  return `Convert it to fahrenheit and return ${celsius}°F is ${fahrenheit}°C`;
}

celsiusToFahrenheit(35);
// Output:- ("Convert it to fahrenheit and return 35°F is 95°C");

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(fahrenheit) {
  celsius = (fahrenheit - 32) * (5 / 9);
  return `Convert it to fahrenheit and return ${fahrenheit}°F is ${celsius}°C`;
}

celsiusToFahrenheit(95);
//Output:- ("Convert it to fahrenheit and return 95°F is 35°C");
/*


5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n, x) {
  let result = 1;
  if (n <= 0) {
    return `The number below 1 is not allowed`;
  } else {
    for (let i = x; i > 0; i--) {
      result *= n;
    }
    return result;
  }
}

pow(2, 3);

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(num, operator) {
  var sum = 0,
    product = 1;
  if (operator === "sum") {
    for (var i = num; i > 0; i--) {
      sum += i;
    }
    return sum;
  } else if (operator === "product") {
    for (var n = num; n > 0; n--) {
      product *= n;
    }
    return product;
  } else {
    alert("Not a valid Input");
  }
}

sumOrProductOfN(4, "sum"); // 10
sumOrProductOfN(4, "product"); // 24
sumOrProductOfN(4, "hello"); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

function sumOf(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    if (i % 5 === 0) {
      sum += i;
    } else if (i % 7 === 0) {
      sum += i;
    } else {
    }
  }
  return sum;
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min() {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck() {
  return typeof a;
}
