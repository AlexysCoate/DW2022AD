const express = require('express');
const router = express.Router();
const personaController= require('../controllers/persona')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
router.get('/altaPersona',personaController.getAltaPersona);
//Servicio para procesar los datos del formulario
router.post('/altaPersona',personaController.postAltaPersona);
//Servicio para consultar todos los datos
router.get('/consultaPersonas',personaController.getPersona);
//Servicio para eliminar un registro por id
router.post('/bajaPersona', personaController.postEliminarPersona);
//Servicio para actualizar las consola
router.post('/actualizarPersona',personaController.postActualizarPersona);

module.exports = router