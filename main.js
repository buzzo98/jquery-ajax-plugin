if (typeof jQuery != 'undefined') {
    var utility = {
        /**
         * the plugin require jquery
         * funzione = is the function to do in success
         * dati     = data array json 
         * url      = url ajax call
         * metodo   = get or post
         * cross    = if call is crossDomain --> y else ---> n
         * default  = call isn't crossDomain of default
         */
         asincrono: function(funzione, dati, url, metodo, cross){
            //check if param exist
            if (dati        == 'undefined') dati = ""; 
            if (funzione    == 'undefined') funzione = baseFunction();
            if (url         == 'undefined') exit;
            if (metodo      == 'undefined') metodo = "post";

            //if corossDomain...
            switch(cross){
                case 'y':
                    $.ajax({
                        data: JSON.stringify(dati),
                        url : url,
                        type: metodo,
                        contentType: 'json',
                        crossDomain: true,
                        success: function(e){
                            funzione(e);
                        },
                        error: function(){
                            console.log("error in the ajax call to url = "+url);
                        }
                
                    })
                    break;
                case 'n':
                    $.ajax({
                        data: JSON.stringify(dati),
                        url : url,
                        type: metodo,
                        contentType: 'json',
                        crossDomain: false,
                        success: function(e){
                            funzione(e);
                        },
                        error: function(){
                            console.log("error in the ajax call to url = "+url);
                        }
                    });
                    break;
                default:
                    $.ajax({
                        data: JSON.stringify(dati),
                        url : url,
                        type: metodo,
                        contentType: 'json',
                        crossDomain: false,
                        success: function(e){
                            funzione(e);
                        },
                        error: function(){
                            console.log("error in the ajax call to url = "+url);
                        }
                    });
                    break;
            }
        },
        /**
         * function for keep and convert data of the form to a json string
         */
        convertJSON : function( element ) {
            var query = element.serialize(),
                parts = query.split( "&" ),
                obj = {};

                parts.forEach(function( part ) {
                    var frags = part.split( "=" );
                    obj[frags[0]] = frags[1];
                });
                    return obj;
                }
    }
} else {
    console.log("This plugin dosn't work without Jquery");
}