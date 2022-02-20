// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
// class Address {
//     constructor(street, suite, city, zipcode, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     };
// };
//
// class Geo {
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
//
// class Company {
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     };
// }
//
// class PersonInfo {
//
//     constructor(id, name, username, email, address, phone, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',new Geo('-37.3159', '81.1496'));
//         this.phone = phone;
//         this.company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets' );
//     }
// }
//
// let info = new PersonInfo(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'address','1-770-736-8031 x56442',
//     'Apt. 556' )
//
// console.log(info);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// class Attrs {
//      constructor(titleOfAttr, actionOfAttr) {
//         this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;
//     }
// }
//
// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// };
//
// let tegInfo = [
//     new Tag('div', 'является блочным элементом и предназначен для выделения фрагмента документа',
//         [new Attrs('align','Определяет выравнивание заголовка'),
//               new Attrs('title','Добавляет всплывающую подсказку к содержимому')]),
//     new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня',
//         [new Attrs('align','Определяет выравнивание заголовка')]),
//     new Tag('a', 'является одним из важных элементов HTML',
//         [new Attrs('coords','Определяет выравнивание заголовка'),
//               new Attrs('href','Задает адрес документа')]),
//     new Tag('span', 'предназначен для определения строчных элементов документа',
//         [new Attrs('class','Определяет имя класса'),
//             new Attrs('dir','Задает направление и отображение текста')]),
//     new Tag('input', 'является одним из разносторонних элементов',
//         [new Attrs('class','Определяет имя класса'),
//             new Attrs('dir','Задает направление и отображение текста')]),
//     new Tag('form', 'устанавливает форму на веб-странице',
//         [new Attrs('class','Определяет имя класса'),
//             new Attrs('name','Имя формы')]),
//     new Tag('option', 'определяет отдельные пункты списка',
//         [new Attrs('label','Указание метки пункта списка.'),
//             new Attrs('name','Имя формы')])
//
// ]
// console.log(tegInfo)