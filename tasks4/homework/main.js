// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//  let a = +prompt('side A');
//  let b = +prompt('side B');
//
//  function areaRect(a, b) {
//      let result = a * b;
//      return result
//
//  }
//
//  console.log(areaRect(a, b));
// alert('area' + areaRect(a,b))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let r = +prompt('radius r');
// let pi = 3.14;
//
// function areaRect(a, pi) {
//     let result = pi * Math.pow(r, 2)
//     return result
//
// }
//
// console.log(areaRect(r, pi));
// alert('area' + areaRect(r, pi))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

 // let r = +prompt('radius r');
 // let h = +prompt('height h');
 //
 //
 // function areaRect(r, h) {
 // let pi = 3.14
 //     let result = 2 * pi * r * h
 //     return result
 //
 // }
 //
 // console.log(areaRect(r, h));
 // alert('area' + areaRect(r, h))
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrNum = [34, 1, 52, 8, 89, -1243, 200, 30];
// function elementOut (arrNum) {
//     for (let i = 0; i < arrNum.length; i++) {
//         console.log(arrNum[i]) ;
//     }
// }
//
// elementOut(arrNum);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function txt (text) {
//     document.write(`<p>${text}`);
// }
//
// // txt('Hello  world.');
// txt('Life is good');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  function txtList (text) {
//      document.write('<ul>');
//      document.write(`<li>${text}</li>`);
//      document.write(`<li>${text}</li>`);
//      document.write(`<li>${text}</li>`);
//      document.write('</ul>');
//
//  }
//
//  txtList('Hello  world.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function txtList (text, length) {
//     document.write('<ul>');
//     for (let i = 0; i < length; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write('</ul>');
//
// }
// txtList('Hello  world.', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrMix = ['olya', true, 'ira', 33, false, 'anna', 55, true, 88, 'katya'];
// function orderList (arr) {
//     document.write('<ol>');
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li> ${arr[i]}</li>`);
//     }
//     document.write('</ol>')
// }
// orderList(arrMix)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let newArray = [
//     {id: 1, name: 'ira', age: 35},
//     {id: 2, name: 'olya', age: 36},
//     {id: 3, name: 'katya', age: 34}
// ];
// function objectKey (arr) {
//     ;
//     for (const arrElement of arr) {
//         document.write('<div style="border-bottom: 1px solid rosybrown; margin-bottom: 15px" >')
//         document.write(`<div>Id - ${arrElement.id};</div>`);
//         document.write(`<div>Name - ${arrElement.name};</div>`);
//         document.write(`<div>Age - ${arrElement.age};</div>`);
//         document.write('</div>')
//     }
// }
//
// objectKey(newArray)