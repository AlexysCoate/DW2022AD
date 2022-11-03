//Configuración de sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');
//objeto de conexión

const sequelize = new Sequelize('examenAMCR','admin','a01746998',{
    dialect:'mysql',
    host:'database-2.cr7wb4xaxn8f.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});

//Cargar los modelos
const modelDefiners =[
    require('../models/videojuego'),
    require('../models/consola'),
    require('../models/company'),
    require('../models/consolaVideojuego'),
    require('../models/persona')
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

//Generar las relaciones entre las tablas
applyRelations(sequelize);

//Exportar el objeto sequelize

module.exports = sequelize;



/*const Consola = sequelize.define('consola',{
    //Atributos
    nombre:{
        type:Sequelize.STRING,
        allowNull: false
    },
    marca:{
        type:Sequelize.STRING,
        allowNull: false
    }
});*/

//Prueba de conexión
/*
sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa")
    })*/