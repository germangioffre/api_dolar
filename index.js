import express from 'express'
import helmet from 'helmet'  // para que sirve esta libreria ??? 
import router from './routes/router.js'
import pkg from 'body-parser'
const {urlencoded, json} = pkg;
const PORT = process.env.PORT || 7070
const app = express();
/* Proyecto listo, se añadió el token desde el archivo .ENV */
/* Arreglar */
app.get('/', async (req, res) => {
    try {
        res.send("API para ver la cotizacion del dolar de Disbyte. Ingrese en la URL el endpoint que desea consultar")
    } catch(e) {
        console.log(e)
        res.send(500);
    }
})

// Settings
app.set('port', PORT);

app.use(helmet())
app.use(urlencoded({ extended: false }));
app.use(json());
app.use('/', router)

// CORS
app.use('*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + PORT)
});