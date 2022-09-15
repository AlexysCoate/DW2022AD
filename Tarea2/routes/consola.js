// Consola.js ayuda a definir que rutas van a tener los distintos

const express = require('express');
const router = express.Router(); //Es como una miniaplicación. Los métodos definidos en router son heredados a la aplicación principal
//Unir los archivos de contola.js de los diferentes folders (contorllers y routes)
const consolaController = require('../controllers/consola')   //La información del otro archivo de consola ahora está en la consolaController

// CRUD (Create Read Update Delete)

//Servicio para mostrar el formulario
router.get('/altaConsola',consolaController.getAltaConsola);
//Servicio para procesar los datos del formulario
router.post('/altaConsola',consolaController.postAltaConsola);
//Servicio para consultar todos los datos
router.get('/consultaConsola',consolaController.getConsultaConsola);

//Servicio para procesar los datos del formulario PALÍNDROMO
router.get('/Palindromo',consolaController.getPalindromo);
//Servicio para procesar los datos del formulario PALÍNDROMO
router.post('/Palindromo',consolaController.postPalindromo);
//Servicio para procesar los datos del formulario LENGUAJE_F
//router.post('/lenguajeF',consolaController.postLenguajeF);

module.exports = router