// Задание 1 – Создать объект counter всеми возможными способами;
// Литеральный
const object1 = {
    name: "Object 1"
};

// new Object
const object2 = new Object();
object2.name = "Object 2";

// Функция-конструктор
function ObjectConstructor() {
    this.name = "Object 3";
}
const object3 = new ObjectConstructor();

// Object.create()
const object4 = Object.create(null);
object4.name = "Object 4";

// Object.assign()
const object5 = Object.assign({}, { name: "Object 5" });

// Функция-фабрика
function createObject() {
    return {
        name: "Object 6"
    };
}
const object6 = createObject();

// Object.fromEntries()
const object7 = Object.fromEntries([["name", "Object 7"]]);

// Через JSON
const object8 = JSON.parse('{"name": "Object 8"}');

// Object.setPrototypeOf()
const object9 = {};
Object.setPrototypeOf(object9, Object.prototype);
object9.name = "Object 9";

// Через constructor property
const object10 = object1.constructor();
object10.name = "Object 10";


// Задание 2 – Скопировать объект counter всеми возможными способами;

const initialObject  = {
    name: "Object 1",
    age: 25,
    address: {
        city: "Moscow",
        street: "Lenina"
    },
    hobbies: ["reading", "sports"]
};

// Spread оператор
const copyObject1 = { ...{ initialObject } };

// JSON.stringify() + JSON.parse()
const copyObject2 = JSON.parse(JSON.stringify(initialObject));

// Object.assign() (поверхностное копирование)
const copyObject3 = Object.assign({}, initialObject);

// structuredClone() (глубокое копирование, новый метод)
const copyObject4 = structuredClone(initialObject);

// Object.create()
const copyObject5 = Object.create(
    Object.getPrototypeOf(initialObject),
    Object.getOwnPropertyDescriptors(initialObject)
);

// Поверхностное ручное копирование через цикл
const copyObject6 = {};
for (let key in initialObject) {
    copyObject6[key] = initialObject[key];
}

// Глубокое ручное копирование с помощью рекурсии
function deepCopy(obj) {
    const copyResult = {};

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyResult[key] = deepCopy(obj[key]);
        }
    }
    return copyResult;
}
const copyObject7 = deepCopy(initialObject);

// Задание3 – Создать функцию makeCounter всеми описанными и возможными способами;
// Function Declaration
function makeCounter1() {
    let count = 0;
    return function() {
        return ++count;
    };
}

// Function Expression
const makeCounter2 = function() {
    let count = 0;
    return function() {
        return ++count;
    };
};

// Arrow Function
const makeCounter3 = () => {
    let count = 0;
    return () => ++count;
};

// Named Function Expression
const makeCounter4 = function makeCounterNamed() {
    let count = 0;
    return function() {
        return ++count;
    };
};

// IIFE
const makeCounter5 = (function() {
    let count = 0;
    return function() {
        return ++count;
    };
})();

// Функция-конструктор
function MakeCounter6() {
    let count = 0;
    this.increment = function() {
        return ++count;
    };
}

// Функция-генератор
function* makeCounter7() {
    let count = 0;
    while (true) {
        yield ++count;
    }
}

// Анонимная функция
const makeCounter8 = function() {
    let count = 0;
    return function() {
        return ++count;
    };
};

// Бонус
// Задание 1 –
// Написать функцию глубокого сравнения двух объектов:

const obj1 = {
    here: {
        is: "on",
        other: "3"
    },
    object: "Y"
};

const obj2 = {
    here: {
        is: "on",
        other: "2"
    },
    object: "Y"
};

const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    return keys1.every(key => {
        return keys2.includes(key) && deepEqual(obj1[key], obj2[key]);
    });
};

console.log(deepEqual(obj1, obj2));

// Бонус
// Задание 2 –
// Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
    return str.split('').reverse().join('');
}