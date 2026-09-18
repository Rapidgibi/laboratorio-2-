# laboratorio-2-
## Descripción

Este proyecto es un ejemplo práctico de la arquitectura MVC
(Modelo–Vista–Controlador) aplicado a una aplicación web sencilla
de productos.

El proyecto utiliza Node.js y Express para crear un servidor web
que permite consultar diferentes productos mediante rutas.

## Arquitectura utilizada

Se utilizó el patrón MVC:

- *Modelo:* contiene los datos de los productos y permite buscar
  un producto por su ID.
- *Vista:* página HTML que muestra enlaces para acceder a los
  diferentes productos.
- *Controlador:* recibe la solicitud, consulta el modelo y
  devuelve la información del producto.
- *Rutas:* definen las direcciones utilizadas para consultar
  los productos.
- *Servidor:* utiliza Express y escucha en el puerto 3000.

## Estructura del proyecto

```text
laboratorio-2/
│
├── controllers/
│   └── productoController.js
│
├── models/
│   └── productomodel.js
│
├── routes/
│   └── productos.js
│
├── public/
│   └── index.html
│
├── servidor.js
├── package.json
└── package-lock.json
