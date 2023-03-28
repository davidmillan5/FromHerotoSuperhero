# NODE JS - Steady, ready, go!

**Steady, ready, go!**
Es emocionante saber que hemos finalizado la
primera etapa de nuestro curso **From Hero to
superhero.**
Si recuerdan ésta etapa se llama **“Steady, ready,
go!”**

## Ejercicio de práctica

Para practicar lo que llevamos del curso la idea es tomar todo lo que han hecho.

1. Vamos a crear una API REST con express en donde se implementan los
   métodos GET, POST, PATCH, DELETE de una lista de productos.

2. Internamente los productos se deben guardar en un archivo .txt para
   asegurar una persistencia de los datos, incluso si se reinicia la aplicación.

## Especificaciones

- Al hacer GET al endpoint **/api/v1/products/** debe devolver toda la lista de productos existentes.
- Al hacer POST al endpoint **/api/v1/products/** debe crear el producto y devolver el producto creado con su identificador único asignado.
- Al hacer PATCH al endpoint **/api/v1/products/{id}** debe modificar el producto y devolver el producto con todos los datos creados.
- Al hacer DELETE al endpoint **/api/v1/products/{id}** debe eliminar el producto y devolver un mensaje diciendo: “producto {nombreDeProducto} fue eliminado” ejemplo: “producto sombrero fue eliminado”.
- Los productos deben de tener: un identificador único, nombre, descripción larga, precio, unidades disponibles y categoría.

## Opcional...

¡Si quieres un punto extra!

- Puedes agregar un middleware para hacer una validación del formato de datos.
- Para esto te recomendamos instalar una librería llamada **joi** la cual te permite hacer validación de una estructura de objetos JSON.
- Cuando no pase la validación hay que responder con un
  código de estatus de error y cuando pase la validación debe funcionar como se describió anteriormente.

![Logo](/Steady_Ready_Go/Ready_Steady_Go_IMG.png)
