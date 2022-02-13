// - Знайти та вивести довижину настипних стрінгових значень
// , 'lorem ipsum', 'javascript is cool'
//   let word1 = 'hello world';
// console.log(word1.length);
//
// let word2 = 'lorem ipsum';
// console.log(word2.length);
//
// let word3 = 'javascript is cool';
// console.log(word3.length);

// - Перевести до великого регістру наступні стрінгові значення// 'hello world', 'lorem ipsum', 'javascript is cool'
// let word1 = 'hello world';
// console.log(word1.toUpperCase())
// let word2 = 'lorem ipsum';
// console.log(word2.toUpperCase())
// let word3 = 'javascript is cool';
// console.log(word3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let word1 = 'HELLO WORLD';
// console.log(word1.toLowerCase())
// let word2 = 'LOREM IPSUM';
// console.log(word2.toLowerCase())
// let word3 = 'JAVASCRIPT IS COOL';
// console.log(word3.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.substring(1,13));
// console.log(str.trim())
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToarray = arrWord => arrWord.split(' ')
//
// let arr = stringToarray(str);
// console.log(arr);
// document.writeln(arr);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.substring(0, length)
//
//  document.writeln(delete_characters(str, 7));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let  insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
//
// console.log(insert_dash(str));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let string = 'hello world'
//
// let register = (str) => str.charAt(0) + str.substring(1)
// console.log(register(string))
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'hello world';
// let ghj =[]
// let capitalize = str => str.split(' ').map(value=>value.charAt(0).toUpperCase()+value.slice(1)).join(' ');
//
// console.log(capitalize(str));