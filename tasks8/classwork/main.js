// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let newClass = document.getElementById('main_header');
// newClass.classList.add('des_2021');
// console.log(newClass)

// b) робить шириниу елементу ul 400px

// let newUl = document.getElementsByTagName('ul');
//  console.log(newUl)
//  newUl[0].style.width = '400px';
//  newUl[0].style.border = '1px solid red';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let newLi = document.getElementsByClassName('linkList');
//  for (const liElement of newLi) {
//      liElement.style.border = '1px solid red';
//      liElement.style.width = '50%';
//  }

// d) отримує текст який зберігається в елементі з класом listElement2
// let liText = document.getElementsByClassName('listElement2');
// console.log(liText);



// e) отримує всі елементи li та змінює ім колір фону на сірий

// let allLi = document.getElementsByTagName('li');
//  console.log(allLi);
// for (let allLiElement of allLi) {
//     allLiElement.style.backgroundColor = 'grey';
//     allLiElement.style.margin = '2px';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let allA = document.getElementsByTagName('a');
// for (let allAElement of allA) {
//     allAElement.classList.add('anchor')
//     console.log(allAElement)
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let allA = document.getElementsByTagName('a');
//  for (let allAElement of allA) {
//      if (allAElement.innerText === 'link3') {
//          allAElement.style.fontSize = '40px'
//      };
//  };

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let allA = document.getElementsByTagName('a');
//  for (let allAElement of allA) {
//      let addClass = allAElement.innerText
//      allAElement.classList.add(`element_${addClass}`)
//      console.log(allAElement)
//  }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let allClass = document.getElementsByClassName('sub-header')
// for (let allClass1 of allClass) {
//     allClass1.style.backgroundColor = prompt('input color')
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// let allClass = document.getElementsByClassName('sub-header')
// for (let allClass1 of allClass) {
//     if (allClass1.innerText === 'content 2 segment'){
//         allClass1.style.color = prompt('input color');
//     };
//
// };
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let allClass = document.getElementsByClassName('content_1');
// for (let allClass1 of allClass) {
//     allClass1.innerText = prompt('input text')
// }
// l) отримати елементи p та змінити їм padding на 20px
// let allElementP = document.getElementsByTagName('p');
// for (let allElementPElement of allElementP) {
//     allElementPElement.style.padding = '20px';
//
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let allElementClass = document.getElementsByClassName('text2');
// for (let allElementClass1 of allElementClass) {
//     console.log(allElementClass1)
//    allElementClass1.innerText = 'sep-2021'
// }


