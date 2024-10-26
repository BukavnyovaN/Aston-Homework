## 1. HTTP Метод OPTIONS

### Общее описание
OPTIONS - HTTP метод, используемый для описания параметров соединения с целевым ресурсом.

### Когда вызывается
- 🔄 Автоматически браузером (preflight CORS-запросы)
- 🔍 При ручной проверке возможностей API
- ⚙️ Для определения параметров соединения

### Области применения
- 🌐 CORS запросы между доменами
- 📡 REST API для определения поддерживаемых методов
- 🛠️ Разработка и тестирование API
- 📚 Документирование API-endpoints

### Заголовки запроса
```http
Origin: [источник запроса]
Access-Control-Request-Method: [планируемый метод]
Access-Control-Request-Headers: [требуемые заголовки]
Host: [хост]
```
### Заголовки ответа
```http
Allow: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Origin: [разрешенные домены]
Access-Control-Allow-Methods: [разрешенные методы]
Access-Control-Allow-Headers: [разрешенные заголовки]
Access-Control-Max-Age: [время кеширования]
```
### Ключевые особенности
- ✅ Безопасный
- ✅ Идемпотентный
- ❌ Не кешируемый
- 🔒 Важен для безопасности CORS


## 2.  HTTP/3.0 Основные характеристики

Целью HTTP/3.0 является обеспечение быстрых, надежных и безопасных веб-соединений. Для этого он использует другой сетевой протокол транспортного уровня, называемый QUIC, который работает поверх интернет-протокола User Datagram Protocol (UDP) вместо TCP, используемого во всех предыдущих версиях HTTP.
### 🚀 Основные изменения
- Использует QUIC вместо TCP
- Построен на UDP
- Встроенный TLS 1.3
- Улучшенная производительность

### 📊 Сравнение с HTTP/2

| Характеристика | HTTP/2.0    | HTTP/3.0    |
|----------------|-------------|-------------|
| Протокол | TCP         | QUIC (UDP)  |
| Шифрование | Опционально | Обязательно |
| Скорость | Базовая     | Улучшенная  |
| HOL блокировка | Есть        | Нет         |

## 3. Почему, если обратиться к переменным созданным через let, const до их объявления - мы получаем ReferenceError?

Временная мёртвая зона (Temporal Dead Zone - TDZ) - это участок от начала блока кода, до строки, где переменная объявлена и инициализирована.

```javascript
console.log(x); // ReferenceError
let x = 1;
```
#### Причины появления ошибки:
- Переменные let/const не всплывают (hoisting) как var
- Существуют в TDZ от начала блока кода до непосредственно объявления переменной

## 4. Способы отмены запроса в JavaScript

### 4.1 Объект AbortController
AbortController - это объект, который можно использовать для отмены не только fetch, но и других асинхронных задач.

#### AbortController – чрезвычайно простой объект:
- Он имеет единственный метод abort() и единственное свойство signal.
- При вызове abort():
- - генерируется событие с именем abort на объекте controller.signal
- - свойство controller.signal.aborted становится равным true.

Пример использования
```javascript 
const controller = new AbortController();
const signal = controller.signal;

fetch('https://httpbin.org/anything', { signal })
   .then(response => response.json())
   .catch(err => {
       if (err.name === 'AbortError') {
           console.log('Запрос отменён');
       }
   });

// Отмена запроса
controller.abort();
```

#### 📝 Ключевые моменты

- AbortController - современный стандарт
- Работает с Fetch API и большинством библиотек
- Позволяет отменять множество запросов одновременно
- Поддерживается всеми современными браузерами

### 4.2 XMLHttpRequest - старый способ через abort()

Пример использования 
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/anything');
xhr.send();

// Отмена
xhr.abort();
```

### 4.3 Axios 

#### Отмена через CancelToken

Пример использования
```javascript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('https://httpbin.org/anything', {
    cancelToken: source.token
});

// Отмена
source.cancel('Запрос отменён');
```
#### Отмена через AbortController
Пример использования
```javascript
const controller = new AbortController();
axios.get('https://httpbin.org/anything', {
    signal: controller.signal
});

controller.abort();
```