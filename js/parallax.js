$(document).ready(function () {
    $(window).scroll(function () { 
        var windowWidth = $(window).width();

        if(windowWidth > 800){ //si la ventana es mayor a 800 se aplica el efecto
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform' : 'translate(0px, ' +scroll / 6 +'%)'
            });

            $('.acerca-de article').css({
                'transform' : 'translate(0px, -' +scroll / 4 +'%)' //no dejar espacios despues del -'
            });

        }
    });

    $(window).resize(function () {  //para una tableta en caso de que se de horizontalmente
        var windowWidth = $(window).width();
        if (windowWidth < 700){
            $('.acerca-de article').css({//no dejar espacios despues del -'
            });

        }
    });
});