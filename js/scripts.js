$(document).ready(function(){


    $('#go').click(function (){

    var city = $('#ville').val();

    $('h1').html(' Ville : ' +city)
        $.ajax({
          //1 definir le fichier à appeler
          url : 'https://www.prevision-meteo.ch/services/json/'+city,		
          //2 methode utilisée pour envoyer les variables

          success : function(Obj){
  console.log(Obj)
            // $('#hier img').attr( 'src', Obj.fcst_day_0.icon_big)
            // $('#hier span').html(Obj.fcst_day_0.tmax+' ° ')
            // $('#aujourdhui h3').html(Obj.fcst_day_1.day_long)
            // $('#aujourdhui img').attr( 'src', Obj.fcst_day_1.icon_big)
            // $('#aujourdhui span').html('Température max : ' +Obj.fcst_day_1.tmax+' ° ')
            // $('#aujourdhui p').html('Température min : ' +Obj.fcst_day_1.tmin+' ° ')
            // $('#demain h3').html(Obj.fcst_day_2.day_long)
            // $('#demain img').attr( 'src', Obj.fcst_day_2.icon_big)
            // $('#demain span').html('Température max : ' +Obj.fcst_day_2.tmax+' ° ')
            // $('#demain p').html('Température min : ' +Obj.fcst_day_2.tmin+' ° ')
            // $('#apres_demain h3').html(Obj.fcst_day_3.day_long)
            // $('#apres_demain img').attr( 'src', Obj.fcst_day_3.icon_big)
            // $('#apres_demain span').html('Température max : ' +Obj.fcst_day_3.tmax+' ° ')
            // $('#apres_demain p').html('Température min : ' +Obj.fcst_day_3.tmin+' ° ')
            // $('#apres_apres_demain h3').html(Obj.fcst_day_4.day_long)
            // $('#apres_apres_demain img').attr( 'src', Obj.fcst_day_4.icon_big)
            // $('#apres_apres_demain span').html('Température max : ' +Obj.fcst_day_4.tmax+' ° ')
            // $('#apres_apres_demain p').html('Température max : ' +Obj.fcst_day_4.tmin+' ° ')
            
        $('#aujourdhui h1').html(city)
        $('#aujourdhui h2').html(Obj.fcst_day_1.day_long + " " + Obj.current_condition.date)
        $('#aujourdhui h3').html(Obj.current_condition.condition)
        $('#aujourdhui img').attr( 'src', Obj.fcst_day_1.icon_big)
        $('#aujourdhui span').html('Température: ' +Obj.current_condition.tmp+'° ')
        $('#aujourdhui p').html('Humidité : ' +Obj.current_condition.humidity+' % ')


  //  var txt = "";
      //   for(a = 0; a<Obj.length; a++){
           // console.log(a)

           // txt += '<div class="info"><h2>'+Obj[a].title+'</h2><p>'+Obj[a].body+'</p></div>'

      

       //  $('#contenu').html(txt)
          } // succes
        
    
    
    })
})



})