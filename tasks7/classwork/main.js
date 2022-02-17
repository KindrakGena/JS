// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//  function Cars(model, manufacter, year, maxspeed, capacity) {
//      this.model = model;
//      this.manufacter = manufacter;
//      this.year = year;
//      this.maxspeed = maxspeed;
//      this.capacity = capacity;

//      this.drive = function () {
//          console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//      };
//
//      this.info = function () {
//          for (const key in this) {
//              if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//          }
//      };
//
//      this.increaseMaxSpeed = function (newSpeed) {
//          this.maxspeed = this.maxspeed + newSpeed;
//          console.log(`Моя нова швидкість ${this.maxspeed}`)
//      };
//
//      this.changeYear = function (newYear) {
//          this.year = this.year + newYear;
//          console.log(`В мене нова машина ${this.year} року.`)
//      };
//
//      this.addDriver = function (driverName , driveOld){
//          this.driver = driverName;
//          this.old = driveOld;
//      };
//
//  };
//
//  let car1 = new Cars('X7', 'BMV', 2020, 200, 3.0)
//  console.log(car1);
//  car1.drive();
//  car1.info();
//  car1.increaseMaxSpeed(40);
//  car1.changeYear(2);
//  car1.addDriver('jenya', 35)
// console.log('------------')
// car1.info();
// console.log('------------')
// console.log(car1)


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class Cars {
//
//     constructor(model, manufacter, year, maxspeed, capacity) {
//         this.model = model;
//         this.manufacter = manufacter;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.capacity = capacity;
//     }
//
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//
//     info () {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`);
//         };
//     };

    // increaseMaxSpeed (newSpeed) {
    //      return  this.maxspeed = this.maxspeed + newSpeed;
    //       // console.log(`Моя нова швидкість ${this.maxspeed}`)
    //   };

   // changeYear (newYear) {
   //      return   this.year = this.year + newYear;
   //        // console.log(`В мене нова машина ${this.year} року.`)
   //    };

//     addDriver (driverName , driveOld){
//           this.driver = driverName;
//           this.old = driveOld;
//       };
// };

// let car2 = new Cars('Passat B8','VW', 2016, 180, 2.0);
// console.log(car2);
// car2.drive();
// console.log(car2.increaseMaxSpeed(30))
// car2.info();
// car2.changeYear(4);
// console.log(`В мене нова машина ${car2.changeYear(2)} року.`);
// car2.addDriver("Ira",34);
// console.log('---------');
// car2.info()


//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelushka {
//      constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     };
// };
//
// let arrPopelushka = [
//     new Popelushka('ira', 22, 36),
//     new Popelushka('olya', 26, 37),
//     new Popelushka('katya', 29, 36),
//     new Popelushka('sveta', 31, 39),
//     new Popelushka('vika', 30, 37),
//     new Popelushka('anna', 18, 35),
//     new Popelushka('nastya', 27, 39),
//     new Popelushka('marta', 20, 40),
//     new Popelushka('oksana', 24, 38),
//     new Popelushka('tanya', 35, 41),
//
// ];
//
// class Prince {
//     constructor(name, age, findsize) {
//         this.name = name;
//         this.age = age;
//         this.findsize = findsize;
//     };
//
// };
//
// let prince = new Prince('viktor', 33, 37);
//
// // let newPair = (arrBride, fiance) => {
// //     for (const arrBrideElement of arrBride) {
// //         if (arrBrideElement.footsize === fiance.findsize && arrBrideElement.age >= 29){
// //             return arrBrideElement.name
// //     }
// //
// //     }
// //
// // }
// //
// // console.log(`попелюшкою є ${newPair(arrPopelushka, prince)}`)
//
// let pairFilter = arrPopelushka.find(value => value.footsize === prince.findsize && value.age >= 29);
// console.log(pairFilter);