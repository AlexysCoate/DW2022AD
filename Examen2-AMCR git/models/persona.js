const Sequelize = require('sequelize');

const Persona = (sequelize) =>{
    sequelize.define('Persona',{
        nombres: Sequelize.STRING,
        apellidos: Sequelize.STRING,
        edad: Sequelize.INTEGER
    })
}

module.exports = Persona;