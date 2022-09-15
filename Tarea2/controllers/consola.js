const { type } = require("os");
const path = require("path");

//
exports.getAltaConsola = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html')); 
}
exports.postAltaConsola = (req,res)=>{
    //var word = req.body.toString()
    //console.log(req.body['palindrome'])   //Los datos son recividos en el body
    //res.json({palabra:pali(req.body.toString())})
}

exports.getConsultaConsola = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}

exports.getPalindromo = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','tarea1_palindromo.html')); 
}
exports.postPalindromo = (req,res)=>{
    console.log(req.body);
    var palindromo = req.body['Palindromo'];
    var palabraNormal = req.body['LenguajeNormal'];
    var palabraF = req.body['LenguajeF'];
    res.json({
        palindromo:palindromeCheck(palindromo),
        palabraEnLenguajeF:LangToF(palabraNormal),
        palabraEnLenguajeN:FtoLang(palabraF)
    })
}

function palindromeCheck(str) {
    var re = /[\W_]/g;   //Idica los non-word characters: A word character is a character a-z, A-Z, 0-9, including _ (underscore).
    var lowRegStr = str.toLowerCase().replace(re, '');  //Coloca la palabra en minúsculas y remplaza los carácteres no deseados por ''
    var reverseStr = lowRegStr.split('').reverse().join('');    //Pone al reves le string original
    result = reverseStr === lowRegStr;

    //Impersión en pantlla de la comparación de strings
    console.log("Palíndromo\n",lowRegStr,"\n",reverseStr,"\n",result,"\n");

    return result;
  }

function LangToF(input){

    var inputLow = input.toLowerCase()
    var re = /ai|ei|ia|oi|ua|au|eu|ie|ou|ue|io|ui|iu|uo|[aeiou]/g;
    //https://www.aulafacil.com/cursos/ortografia/basica/diptongos-triptongos-hiatos-l34924
    const chars = {'ai':'aifi','ei':'eifi','ia':'iafa','oi':'oifi','ua':'uafa',
                    'au':'aufu','eu':'eufu','ie':'iefe','ou':'oufu','ue':'uefe',
                    'io':'iofo','ui':'uifi',
                    'iu':'iufu','uo':'uofo',
                    'a': 'afa', 'e': 'efe','i': 'ifi','o': 'ofo','u': 'ufu'};
    var res = inputLow.replace(re, m=> chars[m]);
   
    return res;

}


function FtoLang(input){

    var inputLow = input.toLowerCase()
    var re = /aifi|eifi|iafi|oifi|uafa|aufu|eufu|iefe|oufu|uefe|iofo|uifi|iufu|uofo|afa|efe|ifi|ofo|ufu/g;
    //https://www.aulafacil.com/cursos/ortografia/basica/diptongos-triptongos-hiatos-l34924
    const chars = {'aifi':'ai','eifi':'ei','iafa':'ia','oifi':'oi','uafa':'ua',
                    'aufu':'au','eufu':'eu','iefe':'ie','oufu':'ou','uefe':'ue',
                    'iofo':'io','uifi':'ui',
                    'iufu':'iu','uofo':'uo',
                    'afa':'a', 'efe':'e','ifi':'i','ofo':'o','ufu':'u'};
    var res = inputLow.replace(re, m=> chars[m]);
   
    return res;

}
