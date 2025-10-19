// USAMOS > console.log(process.argv);
// const method = process.argv[2];
// console.log(method, resource);

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

// products/5
if (method == 'GET' && resource.startsWith('products/')) {
  let id = resource.split('/')[1];
  id = parseInt(id);

  if (isNaN(id) || id <= 0) {
    console.log('No es un numero');
  }
  fetch('https://fakestoreapi.com/products/' + id)
  .then(response => response.json())
  .then(data => console.log(data));
}

if (method == 'GET' && resource == "products") {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(data);
}
