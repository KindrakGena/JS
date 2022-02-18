// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surnam = surname;
//     this.email = email;
//     this.phone = phone;
// };
//
// let arrUsers = [
//     new User(10, 'viktor', 'pavlik', 'dsfjh@gmail.com', 380975245),
//     new User(2, 'igor', 'jhkd', 'dsh@gmail.com', 3809752745),
//     new User(31, 'ira', 'fox', 'fox@gmail.com', 380976943),
//     new User(42, 'katya', 'cyhxvd', 'dtjh@gmail.com', 380975354),
//     new User(56, 'leonid', 'uytr', 'uytrh@gmail.com', 380975475),
//     new User(63, 'stepan', 'pavlik', 'dsfjh@gmail.com', 380975245),
//     new User(77, 'olya', 'xsee', 'esfdf@gmail.com', 380975125),
//     new User(84, 'kolya', 'edfv', 'dweh@gmail.com', 380975022),
//     new User(9, 'anna', 'esgb', 'ytd@gmail.com', 380975368),
//     new User(15, 'vika', 'dhnd', 'dded@gmail.com', 380974712),
// ]
// console.log(arrUsers)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let userFilter = arrUsers.filter(value => {
//     if (value.id % 2 === 0){
//         return value
//     }
//         });
// console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let userSort = arrUsers.sort((a, b) =>a.id -b.id);
// console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)

// class Client {
//        constructor(id, name, surnam, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surnam = surnam;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     };
//
// };

// створити пустий масив, наповнити його 10 об'єктами Client
// let arrClient = [
//     new Client(10, 'viktor', 'pavlik', 'dsfjh@gmail.com', 38097254, ['milk', 'batter', 'egs']),
//     new Client(2, 'igor', 'jhkd', 'dsh@gmail.com', 380975272,['milk', 'batter', 'egs','bread']),
//     new Client(31, 'ira', 'fox', 'fox@gmail.com', 38097694, ['milk', 'batter', 'egs','bread','coffee']),
//     new Client(42, 'katya', 'cyhxvd', 'dtjh@gmail.com', 3808097452, ['milk', 'batter', 'egs','bread','coffee', 'water']),
//     new Client(56, 'leonid', 'uytr', 'uytrh@gmail.com', 380809725,['milk', 'batter']),
//     new Client(63, 'stepan', 'pavlik', 'dsfjh@gmail.com', 380972752,['milk']),
//     new Client(77, 'olya', 'xsee', 'esfdf@gmail.com', 3809780972, ['milk', 'batter', 'egs','bread','coffee', 'water', 'bear']),
//     new Client(84, 'kolya', 'edfv', 'dweh@gmail.com', 380978097, ['milk', 'batter']),
//     new Client(9, 'anna', 'esgb', 'ytd@gmail.com', 3809753652, ['milk', 'batter', 'egs','bread','coffee', 'water', 'bear', 'onion']),
//     new Client(15, 'vika', 'dhnd', 'dded@gmail.com', 380974825, ['milk', 'onion'])
// ]
// // console.log(arrClient)
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let clientOrderSort = arrClient.sort((a, b) => a.order.length - b.order.length);
// console.log(clientOrderSort);