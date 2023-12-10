//Create a program to convert Kelvin to Celsius, then to Fahrenheit.

//Program starts

//Create a constant variable to stor Kelvin information and assign a value to it

const kelvin = 293;

//Create the second constant variable to store celsius information

const celsius = 293-273;

//Create the third variabe, this one can be changed according to celsius 

let fahrenheit = celsius * (9/5) +32;

//Round down the fahrenheit to  smaller than or equal the given value

fahrenheit = Math.floor(fahrenheit);

// output the result

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`) ;