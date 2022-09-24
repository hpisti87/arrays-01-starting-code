const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumber = new Array(5);
// console.log(moreNumber);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1]
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
