console.log('Hello, let’s find your product');

const product = fetch('https://dummyjson.com/products/27')
  .then((res) => res.json())
  .then((product) => console.log(`Here’s your product: ${product.title}`));

console.log('Fetching your product now...');

console.log('Still waiting...');
