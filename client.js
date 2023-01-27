console.log('Hello World');
/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let groupHobbies = ['swimming','board games','painting'];

for (let i = 0; i < groupHobbies.length; i++) {
    console.log(groupHobbies[i]);
}
console.log('Total Hobbies:' , groupHobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

// /**
//  * #2 Colors
//  * ---------
//  * 1. Create an array of colors as strings
//  *    (include the color 'teal' at least once)
//  * 2. Create a variable tealCount
//  * 3. Write a loop that counts the number of times teal 
//  *    is in the array
//  * 4. Output the array and number of times teal was found
//  */
let colors = ['green','red','teal', 'orange','teal'];
let tealCount = 0;

//   start at 0 --tells where to end --tells how to get to end
for (let i = 0; i < colors.length; i++){

    if (colors[i] === 'teal'){
        tealCount += 1;
    }

}
console.log(colors);
console.log('Teal was found' , tealCount , 'times');
// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

let numbers = [3, 7, 2, 8, 11, 4, 2]
let oddNumbers = [];
let evenNumbers= [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i])
    }
    else {
        oddNumbers.push(numbers[i])
    }
}


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2
console.log(numbers);
console.log('Odd', oddNumbers);
console.log('Even' , evenNumbers);

/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8
