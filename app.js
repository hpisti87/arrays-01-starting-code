// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumber = new Array(5);
// console.log(moreNumber);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1]
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[3]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

const testResult = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResult.slice(2);

testResult.push(5.91);

console.log(storedResults, testResult);
