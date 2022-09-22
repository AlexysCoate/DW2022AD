const { type } = require("os");
const path = require("path");

exports.getFormulario = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','forma.html')); 
}

exports.postValidacion = (req,res)=>{
    console.log(req.body);
    
    var nombreCompleto = req.body['nombreCompleto'];
    var edad = req.body['edad'];
    var semestre = req.body['semestre'];
    var materia = req.body['materia'];
    res.json({datosCompletos:verifyData([nombreCompleto,edad,semestre,materia])});
}

function verifyData(data){
    console.log(data.length);
    i=0;
    while(i<data.length){
        if(data[i] == "") return "negativo"
        i++;
    }
    return "afirmativo"
}