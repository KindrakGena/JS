// Все робити за допомоги js.
// - створити блок,
// let divElement = document.createElement('div');
//
// //     - додати йому класи wrap, collapse, alpha, beta
// divElement.classList.add('wrap');
// divElement.classList.add('collapse');
// divElement.classList.add('alpha');
// divElement.classList.add('beta');
// let text = document.createElement('p');
// text.innerText = 'Русский корабель іди на......й!!';
// let img = document.createElement('img');
// img.src = 'https://konkurent.ua/media/cache/da/43/da4359ea5878ce3137f7f5216b7950a3.jpg';
// divElement.append(text, img);
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// divElement.style.background = 'blue';
// divElement.style.color = 'green';
// divElement.style.fontSize = '34px';
// // - додати цей блок в body.
// document.body.appendChild(divElement);
// // - клонувати його повністю, та додати клон в body.
//
// document.body.appendChild(divElement.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let menuItems = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (const itemsMenu of menuItems) {
//     let liElement = document.createElement('li') ;
//     liElement.innerText = itemsMenu;
//     liElement.style.fontSize = '25px';
//     menu.appendChild(liElement);
// };


// Є масив
//  let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText =`${coursesAndDurationArrayElement.title} -- ${coursesAndDurationArrayElement.monthDuration}`;
//     div.style.fontSize = '25px';
//     document.body.append(div);
// };

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let title = document.createElement('h1');
//     title.classList.add('heading');
//     title.innerText = coursesAndDurationArrayElement.title;
//
//     let duration = document.createElement('p');
//     duration.classList.add('description');
//     duration.style.fontSize ='25px';
//     duration.innerText = coursesAndDurationArrayElement.monthDuration;
//
//     div.append(title, duration);
//     document.body.appendChild(div);
// }