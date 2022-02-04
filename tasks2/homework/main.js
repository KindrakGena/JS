// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години)

// let time = +prompt('What time is it now');

// if (time >= 0 && time <= 14) {
//     console.log('зараз перша чверть')
//     alert('зараз перша чверть');
// } else if (time >= 15 && time <= 29) {
//     console.log('зараз друга чверть')
//     alert('зараз друга чверть');
// } else if (time >= 30 && time <= 44) {
//     console.log('зараз третя чверть')
//     alert('зараз третя чверть');
// } else if (time >= 45 && time <= 59) {
//     console.log('зараз четверта чверть')
//     alert('зараз четверта чверть');
// } else {
//     console.log('навчись корсттуваится годинником')
//     alert('навчись корсттуваится годинником')
// };

//Тернарка
// let time = +prompt('What time is it now');
//
// let timeNow = (time >= 0 && time <= 14) ? 'зараз перша чверть' : (time >= 15 && time <= 29) ? 'зараз друга чверть'
//     : (time >= 30 && time <= 44) ? 'зараз третя чверть' : (time >= 45 && time <= 59) ? 'зараз четверта чверть'
//         : 'навчись корсттуваится годинником';
// console.log(timeNow);
// alert(timeNow);


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt("Enter the day of the month");
//
// if (day >= 1 && day <= 10) {
//     console.log('Перша декада')
// } else if (day >= 11 && day <= 20) {
//     console.log('Друга декада')
// } else if (day >= 21 && day <= 31) {
//     console.log('Третя декада')
// } else {
//     console.log("хибні  дані")
// }

// let day = +prompt("Enter the day of the month");
//
// let dayNum = (day >= 1 && day <= 10) ? 'Перша декада' : (day >= 11 && day <= 20) ? 'Друга декада'
//     : (day >= 21 && day <= 31) ? 'Третя декада' : 'хибні  дані' ;
//
// console.log(dayNum);
// alert(dayNum);

// - У нас є змінна test яка дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm('true or false') ? 'Вірно' : 'Неправильно' ;
// console.log(test);
// alert(test)

// let test = true;
// if (test === true) {
//     console.log('ВІРНО')
// } else {
//     console.log('НЕВІРНО')
// }

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let number = +prompt('Введіть число 1, 0 , -3');
// if (number !== 0){
//     console.log('ВІРНО')
// } else {
//     console.log('НЕВІРНО')
// }
// let num =(+prompt('Введіть число 1, 0 , -3') !== 0) ? 'ВІРНО' : 'НЕВІРНО' ;
// console.log(num);
// alert(num);


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


// let myWeek =+prompt('Номер дня тижня');
// switch (myWeek) {
//     case 1 :
//         console.log('не пропустити лекцію');
//         break;
//     case 2 :
//         console.log('здати практичну');
//         break;
//     case 3 :
//         console.log('купити продукти');
//         break;
//     case 4 :
//         console.log('сходити в кіно');
//         break;
//     case 5:
//         console.log('заправити машину');
//         break;
//     case 6 :
//         console.log('приберання');
//         break;
//     case 7:
//         console.log('відпочити');
//         break;
//     default :
//         console.log('тиждень пройшов');
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 2.

// let year = +prompt('Введіть кількість днів в цьому році');

// if(year % 2 === 0){
//     console.log('Рік ВИСОКОСНИЙ');
// }else {
//     console.log('рік звичайний');
// }

// let yearDays = (year % 2 === 0) ? 'Рік ВИСОКОСНИЙ' : 'рік звичайний';
// console.log(yearDays);
// alert(yearDays)


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let jsName = prompt('Яка «офіційна» назва JavaScript?');
// if(jsName === 'ECMAScript'){
//    alert('Правильно, гарна робота');
// } else{
//    alert('Неправильно, офіційна назва - ECMAScript!');
// }
// let jsName = (prompt('Яка «офіційна» назва JavaScript?') === 'ECMAScript') ? alert('Правильно, гарна робота')
//     : alert('Неправильно, офіційна назва - ECMAScript!');
