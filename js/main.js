$(function () {

    //Efecto Menu
    $('.menu a').each(function(index, element){
		$(this).css({
			'top': '-100px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500)); //con el index va cayendo uno por uno en .5 seg sin el todo el texto cae
    }); 
    
    //Efecto Header
    if($(window).width() > 800 ){ //si la ventana es mayor a 800px se ejecuta el siguiente codigo
        $('header .textos').css({
            opacity: 0,
            marginTop :0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop :'-52px'
        },1500); //1500 tiempo que tardara en subir
    }

    //Scroll Elementos Menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top;
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click',function () {
        $('html,body').animate({
            scrollTop:acercaDe -100 //nos dirige al acerca de -100px para que se ajuste
        },500);
      });

      $('#btn-menu').on('click',function () {
        $('html,body').animate({
            scrollTop:menu +15 //nos dirige al acerca de -100px para que se ajuste
        },500);
      });

      $('#btn-galeria').on('click',function () {
        $('html,body').animate({
            scrollTop:galeria +120 //nos dirige al acerca de -100px para que se ajuste
        },500);
      });

      $('#btn-ubicacion').on('click',function () {
        $('html,body').animate({
            scrollTop:ubicacion +185 //nos dirige al acerca de -100px para que se ajuste
        },500);
      });
});