const csvjson = require('convert-csv-to-json');
const { json } = require("body-parser");

//Convertendo o csv em json
function listaJson(){
    let listaJson = csvjson.parseSubArray('\n', ':').getJsonFromCsv("C:/Users/RaioII/Desktop/oqcomer/oq-comer/controller/comida.csv");

    return listaJson;
}

//Filtrando a lista pelo periodo
function filtrarLista(periodo){

    let novaLista = listaJson().filter( (array) => array.periodo == periodo.toLocaleLowerCase());

    return novaLista;
}

const comida = {

    mensagem: function(req, res, next) {
        res.send('Acesse http://localhost:3000/sortear?periodo=cafe como exemplo, possui as opções cafe, almoco, janta');
    },

    menu: function(req,res){
        res.json(filtrarLista(req.query.periodo));
    },

    sorteio: function(req,res){
        const lista = listaJson();
        res.json(lista[Math.floor(Math.random() * lista.length)].comida);
    }
    
}

module.exports = comida;