$(document).ready(function(){

    MaFonctionAjax("Bruxelles-1");
    
	$( "#go" ).click(function() {
        let city = $('#ville').val();

        if (city=="Bruxelles" ) {
            city="Bruxelles-1";
        }
        
        MaFonctionAjax(city);
        console.log(city)
        });
       
       
        function MaFonctionAjax(city) {
       
            $.ajax( {

                url:'https://www.prevision-meteo.ch/services/json/'+city,	
                
                
                
                success:function(Obj) {
                       console.log(Obj);

            // CURRENT DAY
            if (city=="Bruxelles-1" ) {
                $('#capital h1').html("Bruxelles");
            }
            else {
                $('#capital h1').html(city);
            }
            
        $('#aujourdhui h2').html(Obj.fcst_day_0.day_long + " " + Obj.current_condition.date)
        $('#aujourdhui h3').html(Obj.current_condition.condition)
        $('#aujourdhui img').attr( 'src', Obj.fcst_day_0.icon_big)
        $('#aujourdhui span').html(Obj.current_condition.tmp+'° ')
        $('#aujourdhui p').html('Humidité : ' +Obj.current_condition.humidity+' % ')
        $('#aujourdhui .vent').html('Vitesse : ' +Obj.current_condition.wnd_spd+' km/h')
        $('#aujourdhui .rose_vent').removeClass().addClass("rose_vent "+ Obj.current_condition.wnd_dir)
        $('#aujourdhui .pression').html('Pression : ' +Obj.current_condition.pressure+' Pa')

            if (Obj.fcst_day_0.condition_key =="ensoleille") {
                $('#aujourdhui img').attr( 'src', 'img/ensoleille.png')
            }
            else if (Obj.fcst_day_0.condition_key =="brouillard"){
                $('#aujourdhui img').attr( 'src', 'img/brouillard.png')
            }
            else if (Obj.fcst_day_0.condition_key =="averses-de-pluie-faible"){
                $('#aujourdhui img').attr( 'src', 'img/averses-de-pluie-faible.png')
            }
            else if (Obj.fcst_day_0.condition_key =="eclaircies"){
                $('#aujourdhui img').attr( 'src', 'img/eclaircies.png')
            }
            else if (Obj.fcst_day_0.condition_key =="fortement-nuageux"){
                $('#aujourdhui img').attr( 'src', 'img/fortement-nuageux.png')
            }
            else if (Obj.fcst_day_0.condition_key =="fortement-orageux"){
                $('#aujourdhui img').attr( 'src', 'img/fortement-orageux.png')
            }
            else if (Obj.fcst_day_0.condition_key =="neige-faible"){
                $('#aujourdhui img').attr( 'src', 'img/neige-faible.png')
            }
            else if (Obj.fcst_day_0.condition_key =="neige-forte"){
                $('#aujourdhui img').attr( 'src', 'img/neige-forte.png')
            }
            else if (Obj.fcst_day_0.condition_key =="nuit-claire"){
                $('#aujourdhui img').attr( 'src', 'img/nuit-claire.png')
            }
            else if (Obj.fcst_day_0.condition_key =="nuit-legerement-voilee"){
                $('#aujourdhui img').attr( 'src', 'img/nuit-legerement-voilee.png')
            }
            else if (Obj.fcst_day_0.condition_key =="pluie-forte"){
                $('#aujourdhui img').attr( 'src', 'img/pluie-forte.png')
            }
            else if (Obj.fcst_day_0.condition_key =="ciel-partiellement-nuageux"){
                $('#aujourdhui img').attr( 'src', 'img/ciel-partiellement-nuageux.png')
            }
            // DAY 1

        $('#jour1 h2').html(Obj.fcst_day_1.day_long + " " + Obj.fcst_day_1.date)
        $('#jour1 h3').html(Obj.fcst_day_1.condition)
        $('#jour1 img').attr( 'src', Obj.fcst_day_1.icon_big)
        $('#jour1 span').html('Température min: ' +Obj.fcst_day_1.tmin+'° ')
        $('#jour1 p').html('Température max : ' +Obj.fcst_day_1.tmax+' % ')

            if (Obj.fcst_day_1.condition_key =="ensoleille") {
                $('#jour1 img').attr( 'src', 'img/ensoleille.png')
            }
            else if (Obj.fcst_day_1.condition_key =="brouillard"){
                $('#jour1 img').attr( 'src', 'img/brouillard.png')
            }
            else if (Obj.fcst_day_1.condition_key =="averses-de-pluie-faible"){
                $('#jour1 img').attr( 'src', 'img/averses-de-pluie-faible.png')
            }
            else if (Obj.fcst_day_1.condition_key =="eclaircies"){
                $('#jour1 img').attr( 'src', 'img/eclaircies.png')
            }
            else if (Obj.fcst_day_1.condition_key =="fortement-nuageux"){
                $('#jour1 img').attr( 'src', 'img/fortement-nuageux.png')
            }
            else if (Obj.fcst_day_1.condition_key =="fortement-orageux"){
                $('#jour1 img').attr( 'src', 'img/fortement-orageux.png')
            }
            else if (Obj.fcst_day_1.condition_key =="neige-faible"){
                $('#jour1 img').attr( 'src', 'img/neige-faible.png')
            }
            else if (Obj.fcst_day_1.condition_key =="neige-forte"){
                $('#jour1 img').attr( 'src', 'img/neige-forte.png')
            }
            else if (Obj.fcst_day_1.condition_key =="nuit-claire"){
                $('#jour1 img').attr( 'src', 'img/nuit-claire.png')
            }
            else if (Obj.fcst_day_1.condition_key =="nuit-legerement-voilee"){
                $('#jour1 img').attr( 'src', 'img/nuit-legerement-voilee.png')
            }
            else if (Obj.fcst_day_1.condition_key =="pluie-forte"){
                $('#jour1 img').attr( 'src', 'img/pluie-forte.png')
            }
            else if (Obj.fcst_day_1.condition_key =="ciel-partiellement-nuageux"){
                $('#jour1 img').attr( 'src', 'img/ciel-partiellement-nuageux.png')
            }
        
            // DAY 2

        $('#jour2 h2').html(Obj.fcst_day_2.day_long + " " + Obj.fcst_day_2.date)
        $('#jour2 h3').html(Obj.fcst_day_2.condition)
        $('#jour2 img').attr( 'src', Obj.fcst_day_2.icon_big)
        $('#jour2 span').html('Température min: ' +Obj.fcst_day_2.tmin+'° ')
        $('#jour2 p').html('Température max : ' +Obj.fcst_day_2.tmax+' % ')

            if (Obj.fcst_day_2.condition_key =="ensoleille") {
                $('#jour2 img').attr( 'src', 'img/ensoleille.png')
            }
            else if (Obj.fcst_day_2.condition_key =="brouillard"){
                $('#jour2 img').attr( 'src', 'img/brouillard.png')
            }
            else if (Obj.fcst_day_2.condition_key =="averses-de-pluie-faible"){
                $('#jour2 img').attr( 'src', 'img/averses-de-pluie-faible.png')
            }
            else if (Obj.fcst_day_2.condition_key =="eclaircies"){
                $('#jour2 img').attr( 'src', 'img/eclaircies.png')
            }
            else if (Obj.fcst_day_2.condition_key =="fortement-nuageux"){
                $('#jour2 img').attr( 'src', 'img/fortement-nuageux.png')
            }
            else if (Obj.fcst_day_2.condition_key =="fortement-orageux"){
                $('#jour2 img').attr( 'src', 'img/fortement-orageux.png')
            }
            else if (Obj.fcst_day_2.condition_key =="neige-faible"){
                $('#jour2 img').attr( 'src', 'img/neige-faible.png')
            }
            else if (Obj.fcst_day_2.condition_key =="neige-forte"){
                $('#jour2 img').attr( 'src', 'img/neige-forte.png')
            }
            else if (Obj.fcst_day_2.condition_key =="nuit-claire"){
                $('#jour2 img').attr( 'src', 'img/nuit-claire.png')
            }
            else if (Obj.fcst_day_2.condition_key =="nuit-legerement-voilee"){
                $('#jour2 img').attr( 'src', 'img/nuit-legerement-voilee.png')
            }
            else if (Obj.fcst_day_2.condition_key =="pluie-forte"){
                $('#jour2 img').attr( 'src', 'img/pluie-forte.png')
            }
            else if (Obj.fcst_day_2.condition_key =="ciel-partiellement-nuageux"){
                $('#jour2 img').attr( 'src', 'img/ciel-partiellement-nuageux.png')
            }
    
        
            // DAY 3

        $('#jour3 h2').html(Obj.fcst_day_3.day_long + " " + Obj.fcst_day_3.date)
        $('#jour3 h3').html(Obj.fcst_day_3.condition)
        $('#jour3 img').attr( 'src', Obj.fcst_day_3.icon_big)
        $('#jour3 span').html('Température min: ' +Obj.fcst_day_3.tmin+'° ')
        $('#jour3 p').html('Température max : ' +Obj.fcst_day_3.tmax+' % ')

        if (Obj.fcst_day_3.condition_key =="ensoleille") {
            $('#jour3 img').attr( 'src', 'img/ensoleille.png')
        }
        else if (Obj.fcst_day_3.condition_key =="brouillard"){
            $('#jour3 img').attr( 'src', 'img/brouillard.png')
        }
        else if (Obj.fcst_day_3.condition_key =="averses-de-pluie-faible"){
            $('#jour3 img').attr( 'src', 'img/averses-de-pluie-faible.png')
        }
        else if (Obj.fcst_day_3.condition_key =="eclaircies"){
            $('#jour3 img').attr( 'src', 'img/eclaircies.png')
        }
        else if (Obj.fcst_day_3.condition_key =="fortement-nuageux"){
            $('#jour3 img').attr( 'src', 'img/fortement-nuageux.png')
        }
        else if (Obj.fcst_day_3.condition_key =="fortement-orageux"){
            $('#jour3 img').attr( 'src', 'img/fortement-orageux.png')
        }
        else if (Obj.fcst_day_3.condition_key =="neige-faible"){
            $('#jour3 img').attr( 'src', 'img/neige-faible.png')
        }
        else if (Obj.fcst_day_3.condition_key =="neige-forte"){
            $('#jour3 img').attr( 'src', 'img/neige-forte.png')
        }
        else if (Obj.fcst_day_3.condition_key =="nuit-claire"){
            $('#jour3 img').attr( 'src', 'img/nuit-claire.png')
        }
        else if (Obj.fcst_day_3.condition_key =="nuit-legerement-voilee"){
            $('#jour3 img').attr( 'src', 'img/nuit-legerement-voilee.png')
        }
        else if (Obj.fcst_day_3.condition_key =="pluie-forte"){
            $('#jour3 img').attr( 'src', 'img/pluie-forte.png')
        }
        else if (Obj.fcst_day_3.condition_key =="ciel-partiellement-nuageux"){
            $('#jour3 img').attr( 'src', 'img/ciel-partiellement-nuageux.png')
        }
    
        
            // DAY 4

        $('#jour4 h2').html(Obj.fcst_day_4.day_long + " " + Obj.fcst_day_4.date)
        $('#jour4 h3').html(Obj.fcst_day_4.condition)
        $('#jour4 img').attr( 'src', Obj.fcst_day_4.icon_big)
        $('#jour4 span').html('Température min: ' +Obj.fcst_day_4.tmin+'° ')
        $('#jour4 p').html('Température max : ' +Obj.fcst_day_4.tmax+' % ')

            if (Obj.fcst_day_4.condition_key =="ensoleille") {
                $('#jour4 img').attr( 'src', 'img/ensoleille.png')
            }
            else if (Obj.fcst_day_4.condition_key =="brouillard"){
                $('#jour4 img').attr( 'src', 'img/brouillard.png')
            }
            else if (Obj.fcst_day_4.condition_key =="averses-de-pluie-faible"){
                $('#jour4 img').attr( 'src', 'img/averses-de-pluie-faible.png')
            }
            else if (Obj.fcst_day_4.condition_key =="eclaircies"){
                $('#jour4 img').attr( 'src', 'img/eclaircies.png')
            }
            else if (Obj.fcst_day_4.condition_key =="fortement-nuageux"){
                $('#jour4 img').attr( 'src', 'img/fortement-nuageux.png')
            }
            else if (Obj.fcst_day_4.condition_key =="fortement-orageux"){
                $('#jour4 img').attr( 'src', 'img/fortement-orageux.png')
            }
            else if (Obj.fcst_day_4.condition_key =="neige-faible"){
                $('#jour4 img').attr( 'src', 'img/neige-faible.png')
            }
            else if (Obj.fcst_day_4.condition_key =="neige-forte"){
                $('#jour4 img').attr( 'src', 'img/neige-forte.png')
            }
            else if (Obj.fcst_day_4.condition_key =="nuit-claire"){
                $('#jour4 img').attr( 'src', 'img/nuit-claire.png')
            }
            else if (Obj.fcst_day_4.condition_key =="nuit-legerement-voilee"){
                $('#jour4 img').attr( 'src', 'img/nuit-legerement-voilee.png')
            }
            else if (Obj.fcst_day_4.condition_key =="pluie-forte"){
                $('#jour4 img').attr( 'src', 'img/pluie-forte.png')
            }
            else if (Obj.fcst_day_4.condition_key =="ciel-partiellement-nuageux"){
                $('#jour4 img').attr( 'src', 'img/ciel-partiellement-nuageux.png')
            }
    

      
    } // success function
                 
}); // ajax






}



});  // ready	