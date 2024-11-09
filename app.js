// Порешать типовые задачи - написать порядок и вывод в консоли
// 1)
let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
    .then((res) => {
        return res + "b";
    })
    .then((res) => {
        return res + "с";
    })
    .finally((res) => {
        return res + "!!!!!!!";
    })
    .catch((res) => {
        return res + "d";
    })
    .then((res) => {
        console.log(res); // abc
    });

// 2)

function doSmth() {
    return Promise.resolve("123");
}

doSmth()
    .then(function (a) {
        console.log("1", a); // 1 123
        return a;
    })
    .then(function (b) {
        console.log("2", b); // 2 123
        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err); // 3 321
    })
    .then(function (c) {
        console.log("4", c); // 4 undefined
        return c;
    });

// 3) Напишите функцию, которая будет проходить через массив целых чисел
// и выводить индекс каждого элемента с задержкой в 3 секунды.
//     Входные данные: [10, 12, 15, 21]

let initialArr = [10, 12, 15, 21];

function logArrayElementsWithDelay(array) {
    array.forEach((_, index) => {
        setTimeout(() => {
            console.log(index);
        }, index * 3000)
    })
}

logArrayElementsWithDelay(initialArr);