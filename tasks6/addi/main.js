//  - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//     let newArr = [];
//     let indexStart = 0;
//     let indexEnd = 3;
//     for (let i = 0; i < Math.round(str.length / n); i++) {
//         let res = str.substring(indexStart, indexEnd);
//         newArr.push(res);
//         indexStart = indexStart + n;
//         indexEnd = indexEnd + n;
//
//     }
//     return newArr
// }
// console.log(cutString('наслаждение', 3))
//
//
//
//  coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArraySort = coursesArray.sort((a, b) => a.modules.length - b.modules.length);
//
//  console.log(coursesArraySort);

// Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// let str = "Астрономия это наука о небесных объектах";
// let sym = "о";
// let stringsearch = (str, sym) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(sym === str[i]) {
//             count++;
//         }
//     };
//     return count;
//
// };
//
// console.log(stringsearch(str, sym))
//
//


//
// // let mailStr = 'someeMAIL@gmail.com';
// //
// // let mailValid = str => {
// //     let valid = str.toLowerCase();
// //     console.log(valid)
// //     return valid.includes('someemail')  && valid.includes('@');
// // }
// // console.log(mailValid(mailStr)) Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
//
// let cutString = (str, limit) => str.split(' ', 5).join(' ')
//
// console.log(cutString(str, 5));
// document.writeln(cutString(str, 5))


// Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//