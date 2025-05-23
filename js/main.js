// Завдання 1
console.log("ЗАВДАННЯ 1");

// Напиши скрипт, який, для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy';
// - замінює значення hobby на 'skydiving';
// - замінює значення premium на false;
// - виводить вміст об'єкта user в форматі ключ:
// значення використовуючи Object.keys() і for...of.

const user = {
    name: "Somberino",
    age: 22,
    hobby: "painting",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
};



// Завдання 2
console.log("ЗАВДАННЯ 2");

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. 
// Функція повертає число — кількість властивостей.

const capitals = {
    ukraine: "Kyiv",
    uk: "London",
    france: "Paris",
    hungary: "Budapest",
    poland: "Warszawa",
    germany: "Berlin",
};

const countProps = (obj) => {
    const values = Object.values(obj).length;
    return values;
};

console.log(countProps(capitals));



// Завдання 3
console.log("ЗАВДАННЯ 3");

// Напиши функцію findBestEmployee(employees), 
// яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employees = {
    "nykodym": "6",
    "mstyslav": "13",
    "lukian": "9",
    "danylo": "2",
};

const findBestEmployee = (employees) => {
    const array = Object.entries(employees);
    let mostTasks = Number(array[0][1]);
    for (let i = 0; i < array.length; i += 1) {
        if (Number(array[i][1]) > mostTasks) {
            const mostProductive = array[i][0];
            return `${mostProductive} виконав(ла) найбільше задач`;
        };
    };
};

console.log(findBestEmployee(employees));



// Завдання 4
console.log("ЗАВДАННЯ 4");

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
// Функція рахує загальну суму зарплати працівників і повертає її. 
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salary = {
    "Dmytro": "13000",
    "Mykola": "14000",
    "Mark": "23000",
    "Emma": "22500",
    "Alex": "43000",
};

const countTotalSalary = (employees) => {
    const salaries = Object.values(employees);
    let sum = 0;
    for (let i = 0; i < salaries.length; i += 1) {
        const numbers = Number(salaries[i]);
        sum += numbers;
    };
    return sum;
};

console.log(countTotalSalary(salary));



// Завдання 5
console.log("ЗАВДАННЯ 5");

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const array = [
    { city: "Lviv", country: "Ukraine", population: 710606,},
    { city: "Krakow", country: "Poland", population: 804237,},
    { city: "Brno", country: "Czechia", population: 400566,},
    { city: "Munich", country: "Germany", population: 1604384,},
    { city: "Liverpool", country: "United Kingdom", population: 496770,}
];

const getAllPropValues = (arr, prop) => {
    const newArray = [];
    for (const element of arr) {
        if (element[prop]) {
            newArray.push(element[prop]);
        };
    };
    return newArray;
};

console.log(getAllPropValues(array, "city"));



// Завдання 6
console.log("ЗАВДАННЯ 6");

// Напиши функцію calculateTotalPrice(allProducts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
    { name: "mango", price: 30, amount: 23, },
    { name: "orange", price: 36, amount: 13, },
    { name: "avocado", price: 43, amount: 93, },
    { name: "egg", price: 3, amount: 46, },
    { name: "candy", price: 60, amount: 53, }
];

const calculateTotalPrice = (allProducts, productName) => {
    for (let i = 0; i < allProducts.length; i += 1) {
        if (allProducts[i].name === productName) {
            const result = `Загальна вартість продукту: ${allProducts[i].price * allProducts[i].amount} грн`;
            return result;
        };
    };
};

console.log(calculateTotalPrice(products, "candy"));
