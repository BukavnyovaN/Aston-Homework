function sayHello(name) {
    const currentTime = new Date().getHours();
    const greeting = currentTime < 12 ? "Доброе утро" : "Добрый день";
    console.log(`${greeting}, ${name}!`);
}

sayHello("Джон");