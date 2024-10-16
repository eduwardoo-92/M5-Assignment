/*
    (1)Write a function called halfNumber() that accepts one argument (a number), 
    divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

    (2)Write a function called squareNumber() that accepts one argument (a number), 
    square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

   (3) Write a function called percentOf() that accepts two numbers, figure out what percent 
    the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

   (4) Write a function called findModulus() that accepts two numbers. Within the function write a 
   statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
*/
//STEP 1
function halfNumber(number) {
    let result = number / 2
    console.log(`Half of ${number} is ${result}. `)
    return result
}
halfNumber(10)

//STEP 2
function squareNumber(number) {
    let result = number * number
    console.log(`The result of squaring the number ${number} is ${result}.`)
    return result
}
squareNumber(3)

//STEP 3
function percentOf(number1, number2){
    let percent = (number1 / number2) * 100
    console.log(`${number1} is ${percent}% of ${number2}. `)
    return percent
}
percentOf(10, 20)

//STEP 4
function findModulus(number1, number2) {
    let mod = number1 % number2
    console.log(`${mod} is the modulus of ${number1} and ${number2} `)
    return mod
}
findModulus(20, 8)


//STEP 5