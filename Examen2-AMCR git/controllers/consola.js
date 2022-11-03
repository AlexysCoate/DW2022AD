const path = require("path");
const Consola = require("../utils/database").models.Consola;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

// Proceso cuando se llame a la ruta
exports.getAltaConsola = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}

exports.postAltaConsola = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    Consola.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}

exports.getConsolas = (req,res)=>{
    //SELECT * from Consola;
    Consola.findAll()
        .then(consolas=>{
            console.log("Consolas",consolas);
            res.send(consolas);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.postEliminarConsola=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    Consola.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("Consola eliminada")
        res.send("Consola eliminada")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.postActualizarConsola=(req,res)=>{
    //UPDATE Consola SET WHERE id=
    console.log(req.body)
    Consola.update({nombreConsola: req.body.nombreConsola},{
        where:{
            id: req.body.id
        }
    }).then(()=>{
        console.log("Consola actualizada")
        res.send("Consola actualiza")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

exports.getConsultaConsola = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}

