# Ecommerce Amarillo
Ecommerce para curso de React JS de CODERHOUSE
## Para correrlo localmente

```sh
$ git clone https://github.com/AdroAmarello/AmarilloEcommerceReactJS.git
$ cd AmarilloEcommerceReactJS
$ npm install
$ npm run dev
```
## Variables de Entorno

Ver archivo [.env.example](https://github.com/AdroAmarello/AmarilloEcommerceReactJS/blob/AmarilloProyectoFinal/.env.example) como ejemplo.


## Tecnologías / Librerías

- [Create-React-App](https://create-react-app.dev/)
- [Firebase](https://firebase.com/)
- [React-hook-form](https://react-hook-form.com/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/)

## Flujo del sitio

Ingresando al sitio se puede visualizar en la parte superior una barra de navegación el nombre del ecommerce, botones con las categorías para su filtrado y un botón con la previsualización de los ítems agregados a la cesta de compras.

La ruta principal tiene un listado de todos los productos del ecommerce con el nombre, una imagen, precio y un botón para ver el detalle del producto.

Ingresando a cada botón de la barra de navegación se produce un filtado de la vista de productos por categoría.

Clickeando en el botón "Ver detalle" se visualiza la información del producto adicionándose una descripción más detallada, el stock disponible y un contador para poder agregar dicho producto a la cesta de compra. 

Una vez agregado el producto a la cesta se actualiza el valor en la barra de navegación y se modifica el contador por un botón para ir una vista previa de la cesta de compra o bien se puede seguir navegando por la tienda y repetir el proceso para agregar otros productos a la cesta. 

Una vez definida la cantidad de productos a comprar tanto a través del botón "Ver cesta de compras" dentro del detalle de un producto como haciendo click en la cesta de la barra de navegación se pasa a la vista del carrito con un listado de los productos agregados con el dato del precio unitario y el precio subtotal por producto, se incluye además, un botón para eliminar el producto de la cesta y debajo informa el total de la compra y un botón "Finalizar Compra" para pasar al formulario de contacto.

En el formulario se solicita nombre, apellido, correo electrónico y número telefónico y se crea la orden con el botón "Crear orden de compra"

Luego se informa por pantalla el código de orden de compra.

Las categorías, los productos y las órdenes de compra se encuentran en el BAAS Firebase.
