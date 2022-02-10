// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNum = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(`Min number is ${a}`);
//         alert(`Min number is ${a}`);
//     } else if (b < c && b < a) {
//         console.log(`Min number is ${b}`);
//         alert(`Min number is ${b}`);
//     }else {
//         console.log(`Min number is ${c}`);
//         alert(`Min number is ${c}`);
//     };
//         };
// minNum(+prompt('input A'), +prompt('input B'), +prompt('input C'));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (a, b, c) => {
//     if (a < b && c < b) {
//         console.log(`Max number is ${b}`);
//         alert(`Max number is ${b}`);
//     } else if (b < a && c < a) {
//         console.log(`Max number is ${a}`);
//         alert(`Max number is ${a}`);
//     }else {
//         console.log(`Max number is ${c}`);
//         alert(`Max number is ${c}`);
//     };
// };
// maxNum(+prompt('input A'), +prompt('input B'), +prompt('input C'));

// - створити функцію яка повертає найбільше число з масиву
// let maxNum = [20, 34, 4, 51, 6, 10, 300, 31, 540];

// let maxNumArr = (arr) => {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// console.log(maxNumArr(maxNum));

// - створити функцію яка повертає найменьше число з масиву
// let minNum = [20, 34, 4, 51, 6, 10, 300, 31, 540];
//
//  let minNumArr = (arr) => {
//      let min = arr[0]
//      for (let i = 0; i < arr.length; i++) {
//          if (min > arr[i]) {
//              min = arr[i];
//          }
//      }
//      return min;
//  }
//
//  console.log(minNumArr(minNum));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//  let numArr = [20, 34, 4, 51, 6, 10, 300, 31, 540];
//  let sum = (arr) => {
//      let sumNum = 0;
//      for (let arrElement of arr) {
//          sumNum += arrElement;
//      }
//      return sumNum;
//  };
//  console.log(sum(numArr));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//  let numArr = [23, 24, 41, 51, 6, 10, 300, 31, 45];
//
//  let arrNumSer = (arr) => {
//      let sumNum = 0;
//      for (let arrElement of arr) {
//          sumNum += arrElement/arr.length
//      }
//      return sumNum;
//  };
//
//  console.log(arrNumSer(numArr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let num = [20, 34, 4, 51, 600, 10, 700, 31, 540];
//
//  let minMaxNum = (arr) => {
//      let max = 0;
//      let min = arr[0]
//      for (let i = 0; i < arr.length; i++) {
//          if (min > arr[i]) {
//              min = arr[i];
//          } if (max < arr[i]) {
//              max= arr[i];
//          }
//      }
//      console.log(max)
//      return min;
//  }
// console.log(minMaxNum(num))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let numRandom = (length) => {
//     let random = [];
//     for (let i = 0; i < length; i++) {
//         random.push(Math.floor(Math.random()*100))
//
//     }
//     console.log(random)
// }
// numRandom(+prompt('input number'));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

//
// let numRandom = (length, limit) => {
//     let random = [];
//     for (let i = 0; i < length; i++) {
//         random.push(Math.floor(Math.random() * limit))
//
//     }
//     console.log(random);
//     return random
// }
// console.log(numRandom(+prompt('input number'), 50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3]
//
// let reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//
//     return newArr;
// }
// document.write(reverse(arr))
// console.log(reverse(arr))