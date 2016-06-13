$(document).ready(function() {
	
	window.sr = new scrollReveal();

	/* modal */
	$('#login, #sign_up, #send_msg, #order, #checkout').on('shown.bs.modal', function(event) {
		$('body.modal-open').removeAttr('style');
		$('body').addClass('modal-open');
	});

	$('.no_account').click(function(event) {
		$('#sign_up').modal('show');
		$('body').addClass('modal-open');
		$('#login').modal('hide');

	});

	$('.go_checkout').click(function(event) {
		$('#checkout').modal('show');
		$('body').addClass('modal-open');
		$('#order').modal('hide');
	});

	$('#clean').click(function(event) {
		$('.modal .input-group input').val('');
	});

	$('.chat .mensagem a').click(function(event) {
		var img_user = $(this).find('.imagem img').parent().html();
		var nome_user = $(this).find('.nome span').text();
		var msg_txt = $(this).find('.prev_mensagem span').text();
		var variavel_time = '';
		var variavel_tick = '';

		$('.mensagem_modal #img_profile').append(img_user);
		$('.mensagem_modal #nome_profile').append('<b>' +nome_user + '</b>');
		$('.mensagem_modal .texto_conversa ul').append('<li class="texto"><span>' +msg_txt+'</span></li>');
		$('.mensagem_modal .texto_conversa ul').append('<li class="tempo"><span class="now">' +variavel_time+ '</span><span class="tick">' +variavel_tick+ '</span></li>');


		$('.mensagem_modal').modal('show');
	});

	$('.mensagem_modal').on('hidden.bs.modal', function () {
		$('.mensagem_modal #img_profile img').remove();
		$('.mensagem_modal #nome_profile b').remove();
		$('.mensagem_modal .texto_conversa li').remove();

	});
	/* end modal */

	/* cookie */

	$('#close_call_cook, #become_cook').click(function(event) {
			$.cookie('cdv', '123', { expires: 10 }); //create cookie and date to expire

			$('#call_cook').effect('blind','fast');

		});

	$(window).load(function() {
		if ( $.cookie('cdv') == null ) {
			$('#call_cook').slideDown(200);
		} else {
			$('#call_cook').effect('blind','fast');

		}
	});/* load */


	/* end cookie */

	$('body').plusAnchor({
		easing: 'easeInOutExpo',
		speed:  200,
		offsetTop: -50
	});

	$('.dropdown-cdv').slideDown(100);

	$('.navbar-toggle').click(function(event) {
		if ($('.nav_cdv .navbar-collapse').hasClass('collapse')) {
			$('.nav_cdv').addClass('black');
		} else {
			$('.nav_cdv').removeClass('black');
		}
	});


	$('.indicator_down').click(function(event) {
		if($('.navbar-collapse').hasClass('in')) {
			$('.navbar-collapse').removeClass('in');
		}

	});

	/* upload image profile cook */
	$(document).on('click', '#close-preview', function(){ 
		$('.image-preview').popover('hide');

		$('.image-preview').hover(
			function () {
				$('.image-preview').popover('show');
			}, 
			function () {
				$('.image-preview').popover('hide');
			}
			);    
	});

	$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
    	type:"button",
    	text: 'x',
    	id: 'close-preview',
    	style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
    	trigger:'manual',
    	html:true,
    	title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
    	content: "Sem imagem",
    	placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
    	$('.image-preview').attr("data-content","").popover('hide');
    	$('.image-preview-filename').val("");
    	$('.image-preview-clear').hide();
    	$('.image-preview-input input:file').val("");
    	$(".image-preview-input-title").text("Escolha..."); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
    	var img = $('<img/>', {
    		id: 'dynamic',
    		width:250,
    		height:200
    	});      
    	var file = this.files[0];
    	var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
        	$(".image-preview-input-title").text("Trocar");
        	$(".image-preview-clear").show();
        	$(".image-preview-filename").val(file.name);            
        	img.attr('src', e.target.result);
        	$(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});
	/* upload image profile cook */

	/* validation forms */

	$('form').validator();

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
	/* end validation forms */


	/* cadastro prato */

	$('#faco_entrega').click(function(event) {
		$('.adicional_entrega').toggle(100);
	});

	$('#nao_entrega').click(function(event) {
		$('.adicional_cliente_busca').toggle(100);
	});

	$('#cliente_local').click(function(event) {
		$('.adicional_cliente_local').toggle(100);
	});

	$('.insert_plate #preco_porcao').on('keyup', function(event) {
		if ( $('.insert_plate #preco_porcao').val().length > 4 ) {
			$('.insert_plate #preco_porcao_final').val(0);
			var preco_final = $('.insert_plate #preco_porcao').val();
			preco_final = parseFloat(preco_final.replace(/\,/g, '.'));
			var acrescimo = preco_final * 10/100;
			var preco_final_total = preco_final + acrescimo;
			$('.insert_plate #preco_porcao_final').val(preco_final_total.toFixed(2).split('.'));
		}
	});

	var nome = 1;
	var valor = 1;
	var quant = 1;
	var field = 0;

	$('#add_acompanhamento').click(function(event) {

		if ( nome > 3 ){
			$('#add_acompanhamento').hide(100);
		}

		if ( nome > 0 ){
			$('#remove_acompanhamento').show(100);
		}

		$('.acomp_nome').after('<div class="form-group"><input type="text" name="acompanhamento_'+ nome +'" id="acompanhamento_'+ nome +'" class="form-control"></div>');
		$('.acomp_valor').after('<div class="input-group form-group"><span class="input-group-addon" id="basic-addon1">R$</span><input type="text" class="form-control money" placeholder="R$ 0,00" name="acompanhamento_valor_'+ valor +'" id="acompanhamento_valor_'+ valor +'"></div>');
		$('.acomp_quant').after('<div class="form-group"><input type="number" name="acompanhamento_quant_'+ quant +'" id="acompanhamento_quant_'+ quant +'" class="form-control quantidade_prato" placeholder=""></div>');

		nome ++
		valor ++
		quant ++
		field ++
	});

	$('#remove_acompanhamento').click(function(event) {

		$('.father_nome .form-group:last').remove();
		$('.father_valor .form-group:last').remove();
		$('.father_quant .form-group:last').remove();

		nome --
		valor --
		quant --
		field --

		if ( field == 0 ) {
			$('#remove_acompanhamento').hide(100);
			$('#add_acompanhamento').show(100);
		} else {
			$('#remove_acompanhamento').show(100);
		}

		if ( field >= 3 ) {
			$('#add_acompanhamento').show(100);
		} else {
			$('#add_acompanhamento').show(100);
		}
	});
	/* end cadstro prato */

	/* mask forms */
	$('.date').mask('99/99/9999');
	$('.time').mask('00:00:00');
	$('.time_entrega').mask('000');
	$('.date_time').mask('00/00/0000 00:00:00');
	$('.cep').mask('00000-000');
	$('.phone').mask('(00) 0000-0000');
	$('.phone_cel').mask('(00) 00000-0000');
	$('.phone_with_ddd').mask('(00) 0000-0000');
	$('.phone_us').mask('(000) 000-0000');
	$('.mixed').mask('AAA 000-S0S');
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.money').mask('000.000.000.000.000,00', {reverse: true});
	$('.card_credit').mask('0000-0000-0000-0000');
	$('.card_date').mask('00/00');
	$('.quantidade_prato').mask('999');
	/* end mask forms */

	/* unmask on submit */
	$('form').on('submit', function(event) {
		$('input').unmask();
	});
	/* end unmask on submit */

	/* rating plate */
	
	$('.avaliacao_prato #sabor, .avaliacao_prato #tamanho, .avaliacao_prato #preco, .avaliacao_prato #pontualidade').barrating({
		theme: 'fontawesome-stars'
	});
	
	/* end rating plate */

	/* id modal */
	$('ul.chat li').click(function(event) {
		var ID = $(this).attr('id');
		$('.mensagem_modal .modal-content').attr('id', ID);
	});
	/* end id modal */

}); //end