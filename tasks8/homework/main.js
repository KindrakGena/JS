// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
//  let textId = document.getElementById('content');
// console.log(textId.innerText)
// -- отримує текст з блоку з id "rules"
// let textId = document.getElementById('rules');
// console.log(textId.innerText)
// -- замініть текст параграфа з id 'content' на будь-який інший
//   let textId = document.getElementById('content');
//   textId.innerHTML = '<p>Hello World</p>';
//  console.log(textId)

// -- замініть текст параграфа з id 'rules' на будь-який інший
// let textId = document.getElementById('rules');
// textId.innerHTML = '<p>Hello World</p>';
// console.log(textId)

// -- змініть кожному елементу колір фону на червоний
// let colorChange = document.body.children;
// for (let colorChangeElement of colorChange) {
//     colorChangeElement.style.backgroundColor = 'red'
// }
// -- змініть кожному елементу колір тексту на синій
// let colorChange = document.body.children;
//  for (let colorChangeElement of colorChange) {
//      colorChangeElement.style.backgroundColor = 'blue'
//  }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let listAttribute = document.getElementById('rules');
// console.log(listAttribute.classList)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let colorChange = document.getElementsByClassName('fc_rules');
// for (let colorChangeElement of colorChange) {
//     colorChangeElement.style.color = 'red'
// }