$("body").on('click','.icone_exibir', function(event) {
    event.preventDefault();
    $(".barra_lateral").toggleClass("exibir_conteudo");
    $(".icone_exibir").css('display','none');
    $(".icone_ocultar").css('display', 'blocks');
});
$("body").on('click','.icone_ocultar', function(event) {
    event.preventDefault();
    $(".barra_lateral").toggleClass("exibir_conteudo");
    $(".icone_exibir").css('display','block');
    $(".icone_ocultar").css('display', 'none');
});