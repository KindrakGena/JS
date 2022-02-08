// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//
//  let arr = [];
// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0){
//     arr[i] = i
//      console.log(arr[i]);
// }
// }
//     b. заповнити його 50 непарними числами за допомоги циклу.
//   for (let i = 0; i < 100; i++) {
//       if (i%2 !== 0){
//       arr[i] = i
//           console.log(arr[i]);
//   }
//   }
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//  let arr = [];
//  for (let i = 0; i < 20; i++) {
//        arr[i] = Math.floor(Math.random()*10);
//
//    } console.log(arr);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8)+8);
//     console.log(arr[i]);
// }

// 2. Вивести за допомогою console.log кожен третій елемен

//
// for (let i = 2; i < 50; i+=3) {
//       console.log(i);
//  }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  for (let i = 2; i < 50; i += 3) {
//      if (i % 2 === 0) {
//          console.log(i);
//      }
//  }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr =[]
//  for (let i = 2; i < 50; i += 3) {
//       if (i % 2 === 0) {
//           arr[i]=i
//           console.log(arr[i]);
//       }
//   }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i])
//     }
//
//         }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (const number of arr) {
//     sum += number
//
// }
// console.log(sum)

// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [100, 250, 50, 168, 120, 345, 188, 77, 43, 13];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//
// }
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [100, 250, 50, 168, 120, 345, 188, 77, 43, 13];
// let arrNum = [];
// for (let i = 0; i < arr.length; i++) {
//    arrNum[i] = arr[i]
//
// }
// console.log(arrNum)
//
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arrLetter = ['a', 'b', 'c'];
// let sumLetter = '';
// for (let i = 0; i < arrLetter.length; i++) {
//     sumLetter +=arrLetter[i]
//
// }
// console.log(sumLetter)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arrLetter = ['a', 'b', 'c'];
// let sumLetter = '';
// let i =0;
// while (i<arrLetter.length){
//     sumLetter +=arrLetter[i];
//     i++
// }
// console.log(sumLetter)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arrLetter = ['a', 'b', 'c'];
// let sumLetter = '';
// for (const arrLetterElement of arrLetter) {
//     sumLetter +=arrLetterElement;
// }
//
//
// console.log(sumLetter)