var builder = require('botbuilder'); //usar libreria botbuilder
var restify = require('restify'); //usar libreria restify webservice

module.exports = function(session){
    builder.Prompts.choice(session,'Hola, soy un bot de On-boarding. Puedo ayudarte con los siguientes temas:','Glosario|Información General|Descargas|Buscar Empleados MS',{listStyle: builder.ListStyle.button});
        },
        function(session, results){
            seleccionMenu(results);
    }

