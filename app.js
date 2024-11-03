// Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило
// - some value (Привязать через bind, call, apply)


function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);
logger.apply(obj);
const boundLogger = logger.bind(obj);
boundLogger();

// Массивы:
// Создайте массив чисел и найдите его сумму

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numArr.reduce((acc, next) => acc += next, 0);

// Создайте массив строк и объедините их в одну строку.

const strArr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];

const result = strArr.join('');

// Найдите максимальный и минимальный элементы в массиве чисел.

const nums = [1, 22, 53, 34, 51, 16, 27, 38, 9, 12];

const sortedArr = nums.sort((a, b) => a - b);

const minNum = sortedArr[0];
const maxNum =  sortedArr[sortedArr.length - 1];

// 3.2 Stack (стек): - Реализуйте стек с использованием массива.

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
        return this.items.length;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Стек пустой");
        }
        return this.items.pop();
    }

    getPeek() {
        if (this.isEmpty()) {
            throw new Error("Стек пустой");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }
}

// 3.3 Queue (очередь):
// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.

class Queue {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    remove() {
        if (this.isEmpty()) {
            return "The queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const shopQueue = new Queue();

shopQueue.add("Customer 1");
console.log("+ Customer 1 is added");

shopQueue.add("Customer 2");
console.log("+ Customer 2 is added");

shopQueue.add("Customer 3");
console.log("Customer 3 is added");

console.log("===Service begins: ===");

while (!shopQueue.isEmpty()) {
    const customer = shopQueue.remove();
    console.log(`- ${customer} is being served`);
    console.log(` ${shopQueue.size()} customers left`);
}

console.log("\nThe queue is empty, all customers are served!");

// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.customBind = function(context, ...args1) {
    const originalFunction = this;

    return function(...args2) {
        return originalFunction.apply(context, [...args1, ...args2]);
    };
};

const person = {
    name: "John",
    greet: function() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

const anotherPerson = {
    name: "Alice"
};


const greet2 = person.greet.customBind(anotherPerson);
greet2(); // Hi, my name is Alice