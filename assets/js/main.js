$(document).ready(function () {
    // Al cargar la página, ocultamos las cortinas
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // Ocultar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Hacer visible la carta con una animación ondulante
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            }); // Animación de ondulación
        });
    });

    $('#siguienteBtn').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });

    $('#siguienteBtn2').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje2').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje2').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });

    $('#siguienteBtn3').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje3').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje3').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });

    $('#siguienteBtn4').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje4').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje4').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });
    $('#siguienteBtn5').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje5').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje5').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });
    $('#siguienteBtn6').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje6').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje6').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });
    $('#siguienteBtn7').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje7').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje7').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });
    $('#siguienteBtn8').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje8').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje8').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });
    $('#siguienteBtn9').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje9').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje9').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });
    $('#siguienteBtn10').click(function () {
        // Ocultar la tarjeta actual
        $('#card').hide();

        // Mostrar el nuevo mensaje con animación
        $('#nuevoMensaje10').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
        $('#nuevoMensaje10').show().animate({ 'opacity': 1 }, {
            duration: 1000, step: function (now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }
        }); // Animación de ondulación
    });
}); 
