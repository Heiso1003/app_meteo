$(document).ready(function(){


    $('#go').click(function (){

    var city = $('#ville').val();

        $.ajax({
          //1 definir le fichier à appeler
          url : 'https://www.prevision-meteo.ch/services/json/'+city,		
          //2 methode utilisée pour envoyer les variables

          success : function(Obj){
  console.log(Obj)


            // CURRENT DAY
            
        $('#aujourdhui h1').html(city)
        $('#aujourdhui h2').html(Obj.fcst_day_0.day_long + " " + Obj.current_condition.date)
        $('#aujourdhui h3').html(Obj.current_condition.condition)
        $('#aujourdhui img').attr( 'src', Obj.fcst_day_0.icon_big)
        $('#aujourdhui span').html(Obj.current_condition.tmp+'° ')
        $('#aujourdhui p').html('Humidité : ' +Obj.current_condition.humidity+' % ')
        $('#aujourdhui .vent').html('Vitesse : ' +Obj.current_condition.wnd_spd+' km/h  '+ Obj.current_condition.wnd_dir)
        $('#aujourdhui .pression').html('Pression : ' +Obj.current_condition.pressure+' Pa')


            // DAY 1

        $('#jour1 h1').html(city)
        $('#jour1 h2').html(Obj.fcst_day_1.day_long + " " + Obj.fcst_day_1.date)
        $('#jour1 h3').html(Obj.fcst_day_1.condition)
        $('#jour1 img').attr( 'src', Obj.fcst_day_1.icon_big)
        $('#jour1 span').html('Température min: ' +Obj.fcst_day_1.tmin+'° ')
        $('#jour1 p').html('Température max : ' +Obj.fcst_day_1.tmax+' % ')

      
          }
        
    
    
    })
})



})