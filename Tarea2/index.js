//importar las bibliotectas
const { response, query } = require('express');

const express = require('express');  //Va a la carpeta de node modules y busca la carpetad e express
const path = require('path');    // No tener problemas con las diagonales dependiendo el sistema operativo
const consoslaRoutes = require('./routes/consola');  //Importa las rutas de consola

const { parentPort } = require('worker_threads');

const app = express();  //Genera una aplicación de express

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))    //Interpreta lo que se manda en el formulario en la consola
app.use(express.static(path.join(__dirname,'public')));     //Todos los recursos estáticos están disponibles en la carpeta public. Funciona para cualquir OS
app.use('/consola',consoslaRoutes);    



//Definición de nuestra aplicación web
app.get('/halo',(request, response)=>{
    console.log('Hola Mundo!');
    response.send('<h1> Holaaa Mundooo </h1>');
});

//app.get()   //Le pude recursos al servidor y el servidor los regresa
//Especifica el root       // => arrow function ;  (req,res) = Se puede asignar cualuqier nombre a dichas variables
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));    //Envía cualquier tipo de archivo       dirname -> apunta a la carpeta del proyecto
});      

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','pagina1.html'));
});

app.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','formulario.html'));
});

app.get('/tarea1_palindromo',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','tarea1_palindromo.html'));
});

app.get('/tarea1_lenguajeF',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','tarea1_lenguajeF.html'));
});

//Prueba Query
app.get('/prueba1',(req,res)=>{
    console.log(req.query);
    res.send("Datos enviados por query: " + req.query.name + " " + req.query.age);
});

//Prueba Params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send("Datos enviados por params: " + req.params.name + " " + req.query.age);
});  

//Post: Enviar información al servidor para que modifique su estado
app.post('/prueba3',(req,res)=>{
    console.log(req.body);
    res.send("Datos recibidos");
});

//Lanzar la aplicación
app.listen(8081,()=>{
    console.log("Servidor en línea");
});