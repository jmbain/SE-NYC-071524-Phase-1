// write your code here

//      Callback functions review, critical for array iteration
//      in order to have a callback function, need greetUser to pass a function as an argument
// function login(greetUser) {
//     //console.log(greetUser);
//     const greeting = greetUser("John");
//     console.log(greeting);
// }

// login((username) => {
//     return `Hello ${username}!`
// })

// login((username) => `Hello ${username}!`);
//      Arrow functions are inherently anonymous because don't have a name
//      Call anonymous functions by storing in variables or passing through as argument to parameter
//      error "XYZ is not a function" will help guide if messed up
//      If we have curly braces in arrow function, don't get implicit return unless we add return to block

//          ACTUAL START TO LESSON BELOW
//_____________________________________________________

// const num1 = 7
// const num2 = 14
// const num3 = 21
// ^super inefficient to individually assign values at scale

const numbers = [7,14,21]
console.log(numbers)

//      Adding an element to an Array using a method
//      Methods are built in functions and always are preceded by a "."
//      Methods in a sense are "invocable properties" 
//      .push() for adding to the end of an array, .unshift() for adding at the front
numbers.push(28)    
console.log(numbers)
numbers.push(35,42)    
console.log(numbers)
console.log(numbers.unshift(6))
console.log(numbers)

console.log(numbers.length)

// .pop() removes from the end of an array, .shift() removes from the front of an array
numbers.pop()
console.log(numbers);
numbers.shift()
console.log(numbers);

//      Accessing array indexes - by default 0 index is the first in an array
console.log(numbers[0]);
console.log(numbers[2]);

//      an array with different values of different datatypes
const differentThings = [7, "Hello", true, (num1) => num1 * 2];
console.log(differentThings);
console.log(differentThings[3]);

const multiplyByTwo = differentThings[3];
const result = multiplyByTwo(5);
console.log(result);

// const invokeFunctionFromInsideArray = differentThings[3](4);
// console.log(invokeFunctionFromInsideArray)

//      Get some elements from an array
console.log(numbers.slice(1,4));
console.log(numbers.slice(1,2)[0]);

//      Josh messing around, confirmed can use parameters within slice
// const sliceNum1 = 1
// const sliceNum2 = 2
// console.log(numbers.slice(sliceNum1,sliceNum2))

//      Remove element(s) in the middle of an array with .slice() and .splice()
//      Reminder - slice is non-destructive, splice is destructive
numbers.splice(1,2)
console.log(numbers)

console.log([2, ...numbers, 77])

//      Modify a value from an array
console.log(numbers);
numbers[1] = 101;
console.log(numbers);

//      Object example
//      Note that speak property is a method i.e. a property that is functional
//      Javascript is a "first class language" because can store functions in variables
//      In other words, first class languages allow one to create methods
const person1 = {
    name: "Alice Baker",
    age: 23,
    isStudent: true,
    speak: () => {
        console.log("Hello there!");
    }
};

console.log(person1);
console.log(person1.name)
console.log(person1.age)
console.log(person1.isStudent)
console.log(person1.speak)
person1.speak();

//      Adding a new key and value pair to object referenced by person1 variable
//      Reminder there is a difference between mutating and assigning object properties
//      When using Const, can mutate but cannot reassign
//      In other words, below adds phone number property. Phone number value can change, but phone number key cannot change
person1.phoneNumber = "(123) 456-7890";
console.log(person1);

//      Below shows how reassignment will fail
// person1 = {
//     name: "Bob"
// }
//      Below shows 2 different approaches to mutate/modify values
// person1.name = "Bob Baker"
// person1['name' = "Bob Baker"]
// console.log(person1);

//      for loop vs while loop
for (let counter = 1; counter <=10; counter++) {
    console.log(counter);
}

let counter2 = 10
while(counter2 >=1) {
    console.log(counter2)
    counter2--
}

//      Using a for loop to loop through an array
const foods = ["pizza", "ice cream", "gyro"]
// for (let index = 0; index < foods.length; index++) {
//     console.log(foods[index]);
// }

//      Using the for...of statement to iterate over an array
for(let food of foods) {
    console.log(food);
}

//      Iterating with objects instead of arrays, use for ... in
const fruit = {
    name: "apple",
    price: "0.99",
    color: "red"
};

console.log(fruit);

/*
for(let key in fruit) {
    //console.log(key) - this will return keys
    //console.log(fruit[key]); - this returns values, note that cannot use dot notation for this
}
*/

//      Using the .forEach() method to iterate through an array
//      returns an undefined value as a function, doesn't mean that method isn't working
//      cannot return even if we wanted to (see below example trying to return hi, still returns undefined)
foods.forEach((food)=> {
    console.log(food);
});

const returnValue = foods.forEach((food)=> {
    console.log(food);
    return 'hi'
});
console.log(returnValue)

//      Using the .map() method to iterate through a array and return a new array
const people = [
    {
        name: "Alice",
        age: 23,
    },
    {
        name:"Bob",
        age: 24,
    },
    {
        name:"Charlie",
        age: 19,
    },
    {
        name:"Drew",
        age: 27
    }
]

const names = people.map(person => {
    return person.name
})
console.log(names)

//      Using the .find() method to find an element in an array that meets a specified condition
const foundPerson = people.find(person => {
    return person.name === 'Alice';
})
console.log(foundPerson);

//      Using the .find() method to find an element in an array that meets a specified condition
const filteredPeople = people.filter(person => {
    return person.age >= 21;
})
console.log(filteredPeople);

// Using the .reduce() method to get a sum of the numbers in an array
const numberValues = [6, 2, 8, 7]
const total = numberValues.reduce((accumulator,number) => {
    console.log(accumulator);
    return accumulator + number
}, 0)
console.log(total)

