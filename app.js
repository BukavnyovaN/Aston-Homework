// Создать объект Person несколькими способами, после создать объект Person2,
// чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person('Alice Lee', 28);

class Person2 extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

const person2 = new Person2('Alice Johnson', 32);

// Создать класс PersonThree c get и set для поля name и конструктором,
// сделать класс наследник от класса Person.

class PersonThree {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

class Student extends PersonThree {
    constructor(name) {
        super(name);
    }
}

// БОНУС:
// Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

// Первый вариант, который пришел на ум
const firstSum = (arr, total) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === total) {
                result.push(arr[i], arr[j]);
                return result
            }
        }
    }
    return result;
}

firstSum(arr,total)

// Какая сложность у вашего алгоритма ? Сложность O(n^2)

// Второй вариант с оптимизацией
const enhancedFirstSum = (arr, total) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let missingNum = total - arr[i];
        if(arr.includes(missingNum)) {
            result.push(arr[i], missingNum);
            return result;
        }
    }

    return result;
}

enhancedFirstSum(arr,total)

// Какая сложность у вашего алгоритма ? Сложность O(n)