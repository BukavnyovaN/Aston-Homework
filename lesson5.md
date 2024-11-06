## 1. Какие бывают алгоритмы сортировок 
### Сортировка пузырьком (Bubble Sort)
Простой алгоритм, который сравнивает соседние элементы и меняет их местами, 
если они находятся в неправильном порядке. Он имеет среднюю сложность O(n^2), но является простым в реализации.
### Сортировка вставками (Insertion Sort)
Алгоритм, который постепенно строит отсортированный массив, вставляя новые элементы в правильное место. 
Имеет сложность O(n^2), но эффективен для небольших массивов.
### Сортировка выбором (Selection Sort)
Алгоритм, который находит минимальный элемент и перемещает его в начало массива. 
Затем он повторяет этот процесс для оставшейся части массива. 
Также имеет сложность O(n^2).
### Быстрая сортировка (Quicksort)
Эффективный алгоритм, который использует разделение массива на два подмассива меньшего размера. 
Имеет среднюю сложность O(n log n), но худший случай - O(n^2).
### Сортировка слиянием (Merge Sort)
Алгоритм, который разделяет массив на две половины, сортирует их и затем объединяет. 
Имеет сложность O(n log n) как в худшем, так и в среднем случае.
### Сортировка кучей (Heapsort)
Алгоритм, основанный на двоичной куче. 
Имеет сложность O(n log n) и является устойчивым.
### Поразрядная сортировка (Radix Sort)
Алгоритм, который сортирует числа, обрабатывая их цифры, начиная с младших. 
Имеет линейную сложность O(kn), где k - количество цифр в максимальном числе.


## 2. Операторы и выражения, циклы в JS

### Операторы и выражения:

- Арифметические операторы: +, -, *, /, %, ** (возведение в степень)
- Присваивание: =, +=, -=, *=, /=, %=, **=
- Сравнение: >, <, >=, <=, ==, !=, ===, !==
- Логические операторы: && (and), || (or), ! (not)
- Побитовые операторы: &, |, ^, ~, <<, >>, >>>
- Тернарный оператор: условие ? valueIfTrue : valueIfFalse
- Выражения: Комбинация операндов (переменные, значения) и операторов, которая вычисляется в единое значение

### Циклы:

- #### for loop:
```javascript
for (let i = 0; i < 5; i++) {
console.log(i); // 0, 1, 2, 3, 4
}
```

- #### while loop:
```javascript 
let i = 0;
while (i < 5) {
console.log(i); // 0, 1, 2, 3, 4
i++;
}
```

- #### do...while loop:
```javascript 
i = 0;
do {
console.log(i); // 0, 1, 2, 3, 4
i++;
} while (i < 5);
```

- #### for...of loop (для итерируемых объектов, таких как массивы):
```javascript 
const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
console.log(item); // 1, 2, 3, 4, 5
}
```

- #### for...in loop (для итерации по свойствам объекта):
```javascript
const obj = { a: 1, b: 2, c: 3 };
for (const prop in obj) {
console.log(prop, obj[prop]); // 'a' 1, 'b' 2, 'c' 3
}
```

### Управление циклами: 
- break (выход из цикла)
- continue (пропуск текущей итерации)