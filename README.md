# API Dolar Argentina BCRA

Obtene las diferentes cotizaciones del dólar.

## Endpoints
URL: https://api-dolar-argentina.herokuapp.com/

| Metodo | Endpoint | Descripcion |
| ------ | ------ | ------ |
| GET | /api/all | Muestra todos los valores del |
| GET | /api/var_usd_vs_usd_of | Muestra diferencia entre dolar blue y el ofcial |
| GET | /api/usd | Cotizacion dólar blue |
| GET | /api/usd_of | Cotizacion dólar oficial |
| GET | /api/usd_of_minorista | Cotizacion dólar minorista |


### Respuestas

_Todos los endpoints devuelven solo 2 valores, "d" que sería la fecha, y "v" que es el valor del dolar en la fecha. Ejemplo:_

```javascript
{
    "d": "2022-10-04",
    "v": 148.58
}
```


_La informacion es obtenida del sitio BCRA, por lo cual tambien se puede obtener mucha mas informacion._

#### Flujo de trabajo

Para correr el código, se debe colocar en la terminal "node index.js", asegurando previamente haber instalado node en el dispositivo (npm install node).

*Index.js*

Una vez hecho eso, todo comienza por el archivo "index.js", en él se encuentran:
-La vista principal que ve el usuario
-Configuración de seguridad (Settings & CORS)
-Y en qué puerto se está corriendo el código, en este caso, es en el puerto 8080. Se debe colocar en el navegador de preferencia "localhost:8080"


*Router.js*

Ahora bien, si bien contamos con la ruta "localhost:8080", no toda la información se encuentra allí.
Ahí es cuando aparece en escena "router.js" junto con el controllador "dolarController.js".

En síntesis lo que realiza este sector de código es:

-Importar desde el archivo controllador el resultado de toda la parte lógica-
-Una vez importado, se genera las rutas con "router.get", sumado a la extensión para que se muestre la información allí.


Por ejemplo:
```javascript

router.get('/api/all', dolarInstance.getAllValues)

```
En este caso, tenemos un objeto que es "dolarInstance", que este objeto lo que contiene son las funciones que se encuentran en el controllador "dolarController", luego se selecciona seguido de un punto la función que desea extraer.

Esa función cuenta con el resultado extraido y deseado de la API.

Y por último, se añade una extensión en la url para que se muestre allí la información, en este caso se podría acceder ingresando en: "http://localhost:8080/api/all".

NOTA: No es necesario escribir el localhost al crear rutas.


*DolarController.js*

Y qué sucede dentro de controller? Acá hay funciones asíncronas, que se dedican únicamente a recibir la data de la API, la cual se encuentra en el archivo "dolarSiService".
Una vez obtenido los valores, se extrae la información exacta y personalizada para cada petición, y luego lo deja listo para que, al llamar a estas funciones desde otro archivo, envíe y muestre la información correspondiente  


*DolarSiService.js*

En este archivo se basa pura y exclusivamente en extraer la informacion de la API.
Cuenta con sus respectivas configuraciones, cuenta con su token (que caduca al año), y su respectivo header que es fundamental para poder acceder a la información de dicha API.
Luego se retorna el valor que obtiene de la API, para que al llamar a la función, se obtenga el valor de la API.

*Util.js*

En util.js se encuentran funcionalidades como:

-Obtener la fecha exacta en la que se consulta
-Pasar el valor del dolar en formato numérico
-Y tener la evolución mes a mes

De momento no se está utilizando esto, pero no está de más saber que está ahí.