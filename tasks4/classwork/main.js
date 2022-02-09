// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3){
//         console.log(`min number is ${num1}`);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(`min number is ${num2}`);
//     }else {
//         console.log(`min number is ${num3}`);
//     }
//
//         }
// minNumber(699, 80, 70);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber(num1, num2, num3) {
//     if (num1 < num2 && num3 < num2){
//         console.log(`max number is ${num2}`);
//     } else if (num2 < num1 && num3 < num1) {
//         console.log(`max number is ${num1}`);
//     }else {
//         console.log(`max number is ${num3}`);
//     }
//
// }
// maxNumber(699, 80, 700);
// - створити функцію яка повертає найбільше число з масиву

// let list = [34, 1, 529, -78, 89.7, 1243, 2000, 300000];
// function maxElement (list){
//     let max;
//     let min = list[0];
//     for(let i = 0; i < list.length; i++){
//         if((list[i]) < min){
//             min = list[i];
//         } else {
//             max = list[i];
//         }
//     }
//     return max;
// }
//
// console.log(maxElement(list));
// - створити функцію яка повертає найменьше число з масиву
// let list = [34, 1, 529, -78, 89.7, 1243, 2000, 300000];
// function maxElement (list){
//     let max;
//     let min = list[0];
//     for(let i = 0; i < list.length; i++){
//         if((list[i]) < min){
//             min = list[i];
//         } else {
//             max = list[i];
//         }
//     }
//     return min;
// }
//
// console.log(maxElement(list));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//  let arrNum = [34, 1, 52, 8, 89, 1243, 200, 30];
//  let result =0;
//  function sumNum (arrNum){
//      for (let arrNumElement of arrNum) {
//          result +=arrNumElement;
//
//      }
//  return result;
//  }
//  let sum = console.log(sumNum(arrNum))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrNum = [34, 1, 52, 8, 89, 1243, 200, 30];
// let result =0;
// function sumNum (arrNum){
//     for (let arrNumElement of arrNum) {
//         result +=arrNumElement;
//
//     }
//     return result / arrNum.length
// }
// let sum = console.log(sumNum(arrNum))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let arrNum = [34, 1, 52, 8, 89, -1243, 200, 30];
//
// function minMax(arr) {
//     let max =0;
//     let min = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i]) < min) {
//             min = arr[i];
//         } if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     console.log(max)
//     return min;
// }
// console.log(minMax(arrNum))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function numRan (length) {
//      let arrEmpty = [];
//      for (let i = 0; i < length; i++){
//          arrEmpty.push(Math.floor(Math.random()*100));
//      }
//  return arrEmpty
//  };
//
//  document.write(numRan(12))
// console.log(numRan(22))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function numRan (length, limit) {
//     let arrEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrEmpty.push(Math.floor(Math.random()*limit));
//     }
//     return arrEmpty
// };
//
// document.write(numRan(20, 10))
// console.log(numRan(22, 10))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку.  -> [3, 2, 1].
// let arr = [1,2,3]
// function reverse(arr) {
//      let newArr = [];
//      for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//          newArr[ri] = arr[i];
//      }
//
//      return newArr;
//  }
// document.write(reverse(arr))
// console.log(reverse(arr))