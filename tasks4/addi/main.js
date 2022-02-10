//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function argSum(a, b) {
//     if (a !== undefined && b !== undefined) {
//         document.write('<h2>' + a + ' ' + b + '</h2>');
//         console.log(b)
//     } else if (a !== undefined && b === undefined) {
//         document.write(`<h2>${a}`);
//     }else {
//         document.write(`<h2>${b}`);
//     }
// }
//
// argSum( 'hello', 'world')

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
//
// function arrSum (arr1, arr2) {
//     let arrNew = [];
//     for (let i = 0, j=0; i < arr1.length,  j<arr2.length;  i++, j++) {
//        arrNew[i] = arr1[i] + arr2[j]
//     }
// return arrNew
// }
//
// console.log(arrSum(arr1, arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function keyReturn (arr) {
//     let keyName = [];
//     for (let arrElement of arr) {
//         for (let key in arrElement){
//            keyName.push(key);
//         }
//     }
//     return keyName;
// } ;
//
// console.log(keyReturn(arrObj))

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ];
//  let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keyName = [];
//  function keyReturn (arr) {
//      for (let arrElement of arr) {
//          for (let key in arrElement){
//              console.log(arrElement[key]);
//              keyName.push(arrElement[key]);
//          }
//      }
// return keyName;
//  } ;
//
//  console.log(keyReturn(arrObj))