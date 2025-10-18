// USAMOS > console.log(process.argv);
// const method = process.argv[2];
// console.log(method, resource);

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == 'GET' && resource == "products") {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(data);
}
