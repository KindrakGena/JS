// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// console.log(friends.length)
// if (friends.length >= 3) {
//     console.log('в цьому масиві 3 і більше елементи');
//     alert('в цьому масиві 3 і більше елементи')
// }else {
//     console.log('в цьому масиві менше 3-х елементів');
//     alert('в цьому масиві менше 3-х елементів')
// }

// let friendsNum = (friends.length >= 3) ?  alert('в цьому масиві 3 і більше елементи') :  alert('в цьому масиві менше 3-х елементів')


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let a = +prompt('input number');
let b = +prompt('input number');
let c = +prompt('input number');

// if ((a > b && a < c) || (a < b && a > c)) {
//     console.log(`middle number is ${a} `);
//     alert(`middle number is ${a} `)
// } else if ((b > a && b < c) || (b < a && b > c)) {
//     console.log(`middle number is ${b} `);
//     alert(`middle number is ${b} `)
// } else {
//     console.log(`middle number is ${c} `);
//     alert(`middle number is ${c} `)
// }

// let middleNum = ((a > b && a < c) || (a < b && a > c)) ? alert(`middle number is ${a} `) :
//     ((b > a && b < c) || (b < a && b > c)) ? alert(`middle number is ${b} `) :
//         alert(`middle number is ${c} `);

// - Перепишіть конструкцію if з використанням умовного оператора '?':

// let a = 1;
// let b = 5
// let result;
// if (a + b < 4) {
//     result = 'Мало';
//     console.log(result)
// } else {
//     result = 'Багато';
//     console.log(result)
// }
//
// let result = (a + b < 4) ? 'Мало': 'Багато';
// console.log(result)


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let num = +prompt('input number');
// let numCheck = (-100 <= num && num < 0) ? alert('число відємне') : (num === 0) ? alert('число 0')
//     : (num > 0 && num <= 100) ? alert('число додатнє') : alert('число не входить в діапазон');
