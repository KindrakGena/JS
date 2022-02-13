// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//  let n1 = 'Harry..Potter';
//
// console.log(n1.split('..').join(' '))

// let n2 = 'Ron---Whisley';
// console.log(n2.split('---').join(' '))

// let n3 = 'Hermione__Granger'
// console.log(n3.split('__').join(' '))
// //
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomNum = (num, limit) => {
//     let newArr = [];
//     for (let i = 0; i < num; i++) {
//         newArr.push(Math.floor(Math.random()*limit))
//
//     }
// return newArr
// }
// console.log(randomNum(20, 100))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let randomNum = (num, limit) => {
//     let newArr = [];
//     for (let i = 0; i < num; i++) {
//         newArr.push(Math.floor(Math.random() * limit));
//     }
//
// return newArr.sort((a, b) => {
//     return  a - b
// })
//
//
// }
// console.log(randomNum(20, 100))

// let randomNum = (num, limit) => {
//     let newArr = [];
//     for (let i = 0; i < num; i++) {
//         newArr.push(Math.floor(Math.random() * limit));
//     }
//
//     return newArr
// }
// let obj = (randomNum(20, 100))
// console.log(obj.sort((a, b) => {
//     return a - b
// }))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomNum = (num, limit) => {
//     let newArr = [];
//     for (let i = 0; i < num; i++) {
//         newArr.push(Math.floor(Math.random() * limit));
//     }
//
//     return newArr.filter(user => user % 2 === 0 )
//
// }
// console.log(randomNum(20, 100))
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let randomNum = (num, limit) => {
//     let newArr = [];
//     for (let i = 0; i < num; i++) {
//         newArr.push(Math.floor(Math.random() * limit));
//     }
//
//     return newArr.map(user => user + '' )
//
// }
// console.log(randomNum(20, 100))
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11, 21, 3];
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr
// }
//
// console.log(sortNums(nums, 'descending'))
// console.log(sortNums(nums, 'ascending'))
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration >= 5))