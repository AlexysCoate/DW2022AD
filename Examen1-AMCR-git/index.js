//importar las bibliotectas
const { response, query } = require('express');

const express = require('express');  //Va a la carpeta de node modules y busca la carpetad e express
const path = require('path');    // No tener problemas con las diagonales dependiendo el sistema operativo
const consolaRoutes = require('./routes/examen');  //Importa las rutas de consola

const { parentPort } = require('worker_threads');

const app = express();  //Genera una aplicación de express

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))    //Interpreta lo que se manda en el formulario en la consola
app.use(express.static(path.join(__dirname,'public')));     //Todos los recursos estáticos están disponibles en la carpeta public. Funciona para cualquir OS
app.use('/examen',consolaRoutes);    

/*
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','forma.html'));    //Envía cualquier tipo de archivo       dirname -> apunta a la carpeta del proyecto
});      
*/


//Lanzar la aplicación
app.listen(8081,()=>{
    console.log("Servidor en línea");
});