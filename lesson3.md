## 1. Прочитать и описать работу глобальной функции structuredClone()

### structuredClone() 
- это встроенная функция JavaScript для создания глубокой копии объектов.

### Синтаксис

```javascript
structuredClone(value);
```

### Описание

Создает полную копию объекта со всеми вложенными свойствами. Копия полностью независима от оригинала.

### Преимущества

- Корректно обрабатывает циклические ссылки
- Сохраняет типы данных (Date, RegExp, Map, Set и др.)
- Более производительна чем JSON.parse(JSON.stringify())

### Поддерживаемые типы данных

- Примитивы;
- Встроенные объекты: Object, Array, Map, Set, Date, RegExp, ArrayBuffer, TypedArray, DataView, Blob, File, ImageData.

### Ограничения

Нельзя клонировать:
- Функции;
- DOM узлы;
- Прототипы объектов;
- Символы (Symbol);
- WeakMap/WeakSet.

### Примеры использования
#### Базовое использование
```javascript
const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'Moscow'
    }
};

const clone = structuredClone(obj);
```
#### Клонирование специальных типов
```javascript
const original = {
    date: new Date(),
    set: new Set([1, 2, 3]),
    map: new Map([['key', 'value']]),
    regex: /pattern/
};

const clone = structuredClone(original);
```