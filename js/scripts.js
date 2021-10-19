$( document ).ready(function() {


    // console.log( "ready!" );
    // alert("ready");


// $("h1:not(#titre1)").fadeOut(2000);

// $("h1, p, a, button").click(function(e){
//     e.preventDefault();

//     $(this).fadeOut(2000);

//     // console.log("click")

//   }); //click


// var monlien = $("#premier").attr("href");
// $("input").val(monlien);


// $("a").click(function(e){
//     e.preventDefault();
//     // var lien = $(this).attr("href");
//     $(".tous, .filles, .garcons ,.nonbinaires").fadeOut(2000);
//     // $(".filles").fadeOut(2000));
//     // $(".garcons").fadeOut(2000);
//     // $(".nonbinaires").fadeOut(2000);
// })



$( "li a" ).click(function(e){
    e.preventDefault();
    var gender = "."+$(this).attr("data-gender");
    console.log(gender)

    if(gender == "tous") {
        $( ".col-md-6" ).fadeIn();
    } else {
        $( gender ).fadeIn();
        $( ".col-md-6:not("+gender+")").fadeOut();
    }
});


// $("a").click(function(e){
//     e.preventDefault();
//     var lien = $(this).attr("href");
//     $("#titre1").text(lien);
//     $("input").val(lien);
// })


// var label = $('label[for="hajar"]').text();
// console.log(label);


// $("#go").click(function(e){
//     e.preventDefault();
//     console.log("go");

//     var valeur = $("#hajar").val();
//     console.log(valeur);

//     $("#titre1").text(valeur);
// })


// $("#hajar").keyup+
// (function(){
//     var valeur = $(this).val();
//     $("#titre1").text(valeur);
// });




// var label = $('label[for="hajar"]').text();
// console.log(label);


// var contenu = $("#moninput").html();
// console.log(contenu);


$(".madiv").append("<h1>coucou</h1>");
$("#moninput").val("quelque chose")





//   $("#deuxieme").click(function(e){
//     e.preventDefault();

//     $("p").fadeOut(2000);

//     // console.log("click")

//   }); //click



//   $("#troisieme").click(function(e){
//     e.preventDefault();

//     $("button").fadeOut(2000);

//     // console.log("click")

//   }); //click











    
   
}); //ready