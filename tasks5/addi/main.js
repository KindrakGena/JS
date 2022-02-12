// Дано натуральное число n. Выведите все числа от 1 до n.

// let number = n => {
//     let arr = []
//     for (let i = 1; i < n; i++) {
//       arr[i] = i;
//         console.log(arr[i])
//     }
// }
//
// number(+prompt('input N'));

// Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
// let number = (A, B) => {
//     let arr = []
//     if (A < B) {
//         for (let i = A; i <= B; i++) {
//             arr[i] = i;
//             console.log(arr[i]);
//         };
//     } else {
//         for (let i = A ; i >= B; i--) {
//             arr[i] = i
//             console.log(arr[i])
//         };
//     };
// }
//
// number(+prompt('input N'), +prompt('input B'));


// функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

// let arr = [9,8,0,4];
//
// let arrChang = (arr, i) => {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] = i) {
//             arr[j] = i+1;
//             console.log(arr)
//         }
//
//     }
//
// }
//
// console.log(arrChang(arr),0)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr1 = [1, 0, 6, 0, 3];
//
// let arrChange = arrNum => {
//     for (let i = 0; i < arrNum.length; i++) {
//         if (arrNum[i] === 0) {
//             arrNum.splice(i, 1);
//             arrNum.push(0)
//         }
//
//     }
//     return arrNum
// }
//
// console.log(arrChange(arr1))
//

