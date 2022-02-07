// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arrNum = [22, 33, 44, 55, 66];
// let arrString = ['olya', 'kolya', 'ira', 'vika', 'viktor'];
// let arrMix = ['olya', 33, true, 55, false];
// console.log(arrNum);
// console.log(arrString);
// console.log(arrMix);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//
// let arrEmpty = [];
// arrEmpty[0] = 'olya';
// arrEmpty[1] = 'kolya';
// arrEmpty[2] = 55;
// arrEmpty[3] = true;
// arrEmpty[4] = 66;
// arrEmpty[5] = false;
// console.log(arrEmpty);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div> Hello World </div>');
//     }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//      document.write(`<div>${i} Hello World </div>`);
//     }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i =0;
// while (i<20){
//     document.write('<h1>Hello World</h1>');
//        i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i =0;
//  while (i<20){
//      document.write(`<h1>${i} Hello World</h1>`);
//         i++
//  }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrNum = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90];
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrString = ['olya', 'kolya', 'ira', 'vika', 'viktor', 'anna', 'leonid', 'alex', 'abc', 'katya'];
// for (let string of arrString) {
//     console.log(string)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrString = ['olya', 'kolya', 'ira', 33, false, 'anna', 55, true, 88, 'katya'];
// // for (let i = 0; i < arrString.length; i++) {
// //     // console.log(arrString[i]);
// //       }
// for (let arrStringElement of arrString) {
//     console.log(arrStringElement)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//  let arrString = ['olya', true, 'ira', 33, false, 'anna', 55, true, 88, 'katya'];
//   for (let arrStringElement of arrString) {
//       if (typeof arrStringElement === 'boolean'){
//           console.log(arrStringElement)
//       }
//   }
//  for (let i = 0; i < arrString.length; i++) {
//      if ( typeof arrString[i] === 'boolean') {
//          console.log(arrString[i])
//      }
//
//  }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrString = ['olya', true, 'ira', 33, false, 'anna', 55, true, 88, 'katya'];
//  for (let arrStringElement of arrString) {
//      if (typeof arrStringElement === 'number'){
//          console.log(arrStringElement)
//      }
//  }
// for (let i = 0; i < arrString.length; i++) {
//     if ( typeof arrString[i] === 'number') {
//         console.log(arrString[i])
//     }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//  let arrString = ['olya', true, 'ira', 33, false, 'anna', 55, true, 88, 'katya'];
//   for (let arrStringElement of arrString) {
//       if (typeof arrStringElement === 'string'){
//           console.log(arrStringElement)
//       }
//   }
//
//  for (let i = 0; i < arrString.length; i++) {
//      if (typeof arrString[i] === 'string') {
//          console.log(arrString[i])
//      }
//
//  }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'Happy';
// arr[1] = 'New';
// arr[2] = 2022;
// arr[3] = 'Chto';
// arr[4] = 'Gde';
// arr[5] = 'Kuda';
// arr[6] = 'Sinho Faza Tron';
// arr[7] = true;
// arr[8] = 2019;
// arr[9] = false;
//
// for (let arrElement of arr) {
//     console.log(arrElement)
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`step number ${i}`);
//     document.write(`step number ${i} </br>`)
//
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`step number ${i}`);
//     document.write(`step number ${i} </br>`)
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log(`step number ${i}`);
//     document.write(`step number ${i} </br>`)
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`step number ${i}`);
//         document.write(`step number ${i} </br>`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`step number ${i}`);
//         document.write(`step number ${i} </br>`)
//     }
// }