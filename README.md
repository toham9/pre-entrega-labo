# Pre-entrega-labo
# Empleo de simple API Client (FakeStoreAPI)

# Laboratorio de práctica de desarrollo backend con Node.js
# Autor:Ernesto Blejer
# Version: 1.0
# Fecha: Octubre 2025
Este es un script de **Node.js** (`index.js`) que actúa como un cliente simple para la **Fake Store API** (`https://fakestoreapi.com/`). Permite realizar operaciones **CRUD** (Crear, Leer, Actualizar, Borrar) sobre recursos de productos directamente desde la línea de comandos usando `npm start`.

---

## 🚀 Requisitos

Para ejecutar este script, solo necesitas tener instalado:

* **Node.js** (incluye `npm`).
* Un terminal tipo **Git Bash** o cualquier terminal compatible con comandos de `npm` y pase de argumentos.

---
## EJEMPLOS DE EJECUCION
## #####################

GET
npm start GET products/6

POST
npm start POST products "Producto Nro 2" 110 "Categoria Nro 2"

PUT (modificación, se pasan todos los datos del producto)
npm start PUT products/3 "Producto Nro 3" 150 "Categoria Nro 42"

DELETE
npm start DELETE products/7

# node.js: version 22.19.0
# npm: version 10.9.3
