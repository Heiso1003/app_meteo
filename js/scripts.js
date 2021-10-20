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
        $('#aujourdhui .vent').html('Vitesse : ' +Obj.current_condition.wnd_spd+' km/h  '+ Obj.current_condition.wnd_dir)
        $('#aujourdhui .pression').html('Pression : ' +Obj.current_condition.pressure+' Pa')


            // DAY 1

        $('#jour1 h2').html(Obj.fcst_day_1.day_long + " " + Obj.fcst_day_1.date)
        $('#jour1 h3').html(Obj.fcst_day_1.condition)
        $('#jour1 img').attr( 'src', Obj.fcst_day_1.icon_big)
        $('#jour1 span').html('Température min: ' +Obj.fcst_day_1.tmin+'° ')
        $('#jour1 p').html('Température max : ' +Obj.fcst_day_1.tmax+' % ')

      
    } // success function
                 
}); // ajax






}



});  // ready	