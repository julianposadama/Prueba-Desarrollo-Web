jQuery.noConflict()(function ($) { 
    $(document).ready(function() { 
        $('#btnEnviar').click(function(){
            var errores = '';
            //validando nombre ===========
                // Validado Departamento ==============================
                if( $('#departamento').val() == '' ){
                    errores += '<p>Escriba un Departamento</p>';
                    $('#departamento').css("border-bottom-color", "#F14B4B")
                } else{
                    $('#departamento').css("border-bottom-color", "#d1d1d1")
                }
                // Validado Ciudad ==============================
                if( $('#city').val() == '' ){
                    errores += '<p>Escriba una ciudad</p>';
                    $('#city').css("border-bottom-color", "#F14B4B")
                } else{
                    $('#city').css("border-bottom-color", "#d1d1d1")
                }
        
                // Validado Nombre ==============================
                if( $('#name').val() == '' ){
                    errores += '<p>Ingrese un Nombre</p>';
                    $('#name').css("border-bottom-color", "#F14B4B")
                } else{
                    $('#name').css("border-bottom-color", "#d1d1d1")
                }
        
                // Validado Correo ==============================
                if( $('#email').val() == '' ){
                    errores += '<p>Escriba un Correo</p>';
                    $('#email').css("border-bottom-color", "#F14B4B")
                } else{
                    $('#email').css("border-bottom-color", "#d1d1d1")
                }
        
                // ENVIANDO MENSAJE ============================
                if( errores == '' == false){
                    var mensajeModal = '<div class="modal_wrap">'+
                                            '<div class="mensaje_modal">'+
                                                '<h3>Errores encontrados</h3>'+
                                                errores+
                                                '<span id="btnClose">Cerrar</span>'+
                                            '</div>'+
                                        '</div>'
        
                    $('body').append(mensajeModal);
                }
        
                // CERRANDO MODAL ==============================
                $('#btnClose').click(function(){
                    $('.modal_wrap').remove();
                });
            });
    });
});

