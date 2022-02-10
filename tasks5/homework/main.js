// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника а і б

// let area = (a, b) => a * b;
//
// console.log(area(10, 10))
// document.write('Area rectangle is'+ ' ' + area(+prompt('input A'), +prompt('input B')));
// - створити функцію яка обчислює та повертає площу кола

// let r = +prompt('radius r');
// let pi = 3.14;
//
// let areaRect=(a, pi) => pi * Math.pow(r, 2);
//
// console.log(areaRect(r, pi));
// alert('area' + areaRect(r, pi))
// - створити функцію яка обчислює та повертає площу циліндру
// let r = +prompt('radius r');
// let h = +prompt('height h');
// let pi = 3.14;
//
// let areaСylinder = (r, h, pi) => 2 * pi * r * h;
//
// console.log(areaСylinder(r, h, pi));
// alert('area' + ' ' + areaСylinder(r, h, pi));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrNum = [34, 1, 52, 8, 89, -1243, 200, 30];
//
// let numberOut = (numArr) => {
//     let empty = []
//     for (let i = 0; i < numArr.length; i++) {
//         empty.push(numArr[i])
//        console.log(numArr[i]);
//
//     }
// return empty
// }
//
// console.log(numberOut(arrNum));
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let text = txt => document.write(`<p>${txt}</p>`);
//
// text('Hello World');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  let textLi = tx => {
//      document.write('<ul>');
//          document.write(`<li>${tx}</li>`);
//          document.write(`<li>${tx}</li>`);
//          document.write(`<li>${tx}</li>`);
//      document.write('</ul>');
//  }
//  textLi('Hello World');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let textLi = (tx, length) => {
//     document.write('<ul>');
//     for (let i = 0; i < length; i++) {
//         document.write(`<li>${tx}</li>`);
//     }
//     document.write('</ul>');
// }
// textLi('Hello World', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrMix = ['olya', true, 'ira', 33, false, 'anna', 55, true, 88, 'katya'];
//
// let arrMixOrder = arr => {
//     document.write('<ul>');
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write('</ul>');
// }
// arrMixOrder(arrMix)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let newArray = [
//      {id: 1, name: 'ira', age: 35},
//      {id: 2, name: 'olya', age: 36},
//      {id: 3, name: 'katya', age: 34}
//  ];
//
// let arrId = arrObj => {
//     for (const arrElement of arrObj) {
//          document.write('<div style="border-bottom: 1px solid rosybrown; margin-bottom: 15px" >')
//          document.write(`<div>Id - ${arrElement.id};</div>`);
//          document.write(`<div>Name - ${arrElement.name};</div>`);
//          document.write(`<div>Age - ${arrElement.age};</div>`);
//          document.write('</div>')
//      };
//
// };
//
// arrId(newArray);