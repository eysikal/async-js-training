setTimeout(() => console.log('timeout finished!'), 0);

Promise.resolve().then(() => console.log('promise finished!'));

console.log('Hello World');
