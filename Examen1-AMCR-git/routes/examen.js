const express = require('express');
const router = express.Router(); //Es como una miniaplicación. Los métodos definidos en router son heredados a la aplicación principal
//Unir los archivos de contola.js de los diferentes folders (contorllers y routes)
const consolaController = require('../controllers/examen')   //La información del otro archivo de consola ahora está en la consolaController

//Servicio para mostrar el formulario
router.get('/formulario',consolaController.getFormulario);
//Servicio para procesar los datos del formulario
router.post('/validacion',consolaController.postValidacion);

module.exports = router