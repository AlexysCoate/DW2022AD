const path = require("path");
const Persona = require("../utils/database").models.Persona;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

// Proceso cuando se llame a la ruta
exports.getAltaPersona = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}

exports.postAltaPersona = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    Persona.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}

exports.getPersona = (req,res)=>{
    //SELECT * from Consola;
    Persona.findAll()
        .then(personas=>{
            console.log("Personas",personas);
            res.send(personas);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.postEliminarPersona=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    Persona.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Persona eliminada")
        res.send("Persona eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.postActualizarPersona=(req,res)=>{
    //UPDATE Consola SET WHERE id=
    console.log(req.body)
    Persona.update({nombres: req.body.nombres},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("Persona actualizada")
        res.send("Consola actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.getConsultaPersona = (req,res)=>{
    res.send('<h1>Datos de las personas</h1>')
}

