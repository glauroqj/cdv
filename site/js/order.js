$(document).ready(function() {

	prato_sub_total = $('.sub_total .prato_sub_total input').val();

	acomp_inicial_0 = $('.grid_acompanhamento_0 .acompanhamento_0 input').val();
	acomp_inicial_1 = $('.grid_acompanhamento_1 .acompanhamento_1 input').val();
	acomp_inicial_2 = $('.grid_acompanhamento_2 .acompanhamento_2 input').val();
	acomp_inicial_3 = $('.grid_acompanhamento_3 .acompanhamento_3 input').val();
	acomp_inicial_4 = $('.grid_acompanhamento_4 .acompanhamento_4 input').val();

	quant_acomp_0 = $('.acompanhamento_0 select').val();
	media_acomp_0 = quant_acomp_0 * acomp_inicial_0;
	media_acomp_0 = media_acomp_0 || 0;
	$('.grid_acompanhamento_0 .acompanhamento_0 input').val(media_acomp_0);

	quant_acomp_1 = $('.acompanhamento_1 select').val();
	media_acomp_1 = quant_acomp_1 * acomp_inicial_1;
	media_acomp_1 = media_acomp_1 || 0;
	$('.grid_acompanhamento_1 .acompanhamento_1 input').val(media_acomp_1);

	quant_acomp_2 = $('.acompanhamento_2 select').val();
	media_acomp_2 = quant_acomp_2 * acomp_inicial_2;
	media_acomp_2 = media_acomp_2 || 0;
	$('.grid_acompanhamento_2 .acompanhamento_2 input').val(media_acomp_2);

	quant_acomp_3 = $('.acompanhamento_3 select').val();
	media_acomp_3 = quant_acomp_3 * acomp_inicial_3;
	media_acomp_3 = media_acomp_3 || 0;
	$('.grid_acompanhamento_3 .acompanhamento_3 input').val(media_acomp_3);

	quant_acomp_4 = $('.acompanhamento_4 select').val();
	media_acomp_4 = quant_acomp_4 * acomp_inicial_4;
	media_acomp_4 = media_acomp_4 || 0;
	$('.grid_acompanhamento_4 .acompanhamento_4 input').val(media_acomp_4);

	$('.detail_meal .description .btn-success').click(function(event) {
		quantidade_prato = $('.amount_plate .select_quant_prato select').val();
		media_sub_prato = quantidade_prato * prato_sub_total;

		$('.sub_total .prato_sub_total input').val(media_sub_prato.toFixed(2).split(','));

		setTimeout(function() {
			valor_servico = $('.active .valor_servico input').val();

			var total_pedido = parseFloat(valor_servico) +  parseFloat(prato_sub_total) + parseFloat(media_acomp_0) + parseFloat(media_acomp_1) + parseFloat(media_acomp_2) + parseFloat(media_acomp_3) + parseFloat(media_acomp_4);

			$('.total_pedido_content input').val(total_pedido.toFixed(2).split(','));
		},50);
	});

	/* prato */
	$('.amount_plate select').click(function(event) {

		quantidade_prato = $('.amount_plate .select_quant_prato select').val();
		media_sub_prato = quantidade_prato * prato_sub_total;
		media_sub_prato = media_sub_prato.toFixed(2).split(',');
		$('.sub_total .prato_sub_total input').val(media_sub_prato);

		prato_sub_total_2 = $('.sub_total .prato_sub_total input').val();

		var total_pedido = (prato_sub_total_2);

		$('.total_pedido_content input').val(total_pedido);

	});

	/* acompanhamentos*/
	$('.grid_acompanhamento_0 .acompanhamento_0 select').click(function(event) {

		quant_acomp_0 = $('.acompanhamento_0 select').val();
		media_acomp_0 = quant_acomp_0 * acomp_inicial_0;
		media_acomp_0 = media_acomp_0.toFixed(2).split(',');

		$('.grid_acompanhamento_0 .acompanhamento_0 input').val(media_acomp_0);

	});

	$('.grid_acompanhamento_1 .acompanhamento_1 select').click(function(event) {

		quant_acomp_1 = $('.acompanhamento_1 select').val();
		media_acomp_1 = quant_acomp_1 * acomp_inicial_1;
		media_acomp_1 = media_acomp_1.toFixed(2).split(',');

		$('.grid_acompanhamento_1 .acompanhamento_1 input').val(media_acomp_1);
	});

	$('.grid_acompanhamento_2 .acompanhamento_2 select').click(function(event) {

		quant_acomp_2 = $('.acompanhamento_2 select').val();
		media_acomp_2 = quant_acomp_2 * acomp_inicial_2;
		media_acomp_2 = media_acomp_2.toFixed(2).split(',');

		$('.grid_acompanhamento_2 .acompanhamento_2 input').val(media_acomp_2);
	});

	$('.grid_acompanhamento_3 .acompanhamento_3 select').click(function(event) {

		quant_acomp_3 = $('.acompanhamento_3 select').val();
		media_acomp_3 = quant_acomp_3 * acomp_inicial_3;
		media_acomp_3 = media_acomp_3.toFixed(2).split(',');

		$('.grid_acompanhamento_3 .acompanhamento_3 input').val(media_acomp_3);
	});

	$('.grid_acompanhamento_4 .acompanhamento_4 select').click(function(event) {

		quant_acomp_4 = $('.acompanhamento_4 select').val();
		media_acomp_4 = quant_acomp_4 * acomp_inicial_4;
		media_acomp_4 = media_acomp_4.toFixed(2).split(',');

		$('.grid_acompanhamento_4 .acompanhamento_4 input').val(media_acomp_4);
	});

	/* serviço */

	$('.campo_escolha label').click(function(event) {
		setTimeout(function() {
			valor_servico = $('.active .valor_servico input').val();

			var total_pedido = parseFloat(valor_servico) +  parseFloat(prato_sub_total_2) + parseFloat(media_acomp_0) + parseFloat(media_acomp_1) + parseFloat(media_acomp_2) + parseFloat(media_acomp_3) + parseFloat(media_acomp_4);

			$('.total_pedido_content input').val(total_pedido.toFixed(2).split(','));
		},50);
	});

	/* calculo total */
	$('#order').click(function(event) {
		prato_sub_total_2 = $('.sub_total .prato_sub_total input').val();
		valor_servico = $('.campo_escolha .active .valor_servico input').val();

		var total_pedido = parseFloat(valor_servico) +  parseFloat(prato_sub_total_2) + parseFloat(media_acomp_0) + parseFloat(media_acomp_1) + parseFloat(media_acomp_2) + parseFloat(media_acomp_3) + parseFloat(media_acomp_4);

		$('.total_pedido_content input').val(total_pedido.toFixed(2).split(','));

	});


	$('#order .go_checkout').click(function(event) {
		/* prato*/
		nome_prato = $('#order .plate_name').text();
		$('#checkout .prato_confirma .prato_nome').text(nome_prato);

		quant_prato = $('#order .amount_plate select').val();
		$('#checkout .prato_confirma .quantidade_prato').text(quant_prato);

		sub_total_prato = $('#order .prato_sub_total input').val();
		$('#checkout .prato_confirma .sub_total_prato input').val(sub_total_prato);


		$('.verificar_acompanhamento').hide();

		if ( media_acomp_0 >= 1 ) {
			$('.verificar_acompanhamento').show();
			acompanhamento_nome_0 = $('.grid_acompanhamento_0 .nome_acompanhamento').text();
			$('#checkout .acompanhamento_confirma .acompanhamento_nome_0').text(acompanhamento_nome_0);
			acompanhmento_quantidade_0 = $('.grid_acompanhamento_0 .acompanhamento_0 select').val();
			$('#checkout .acompanhamento_confirma .quantidade_acompanhamento_0').text(acompanhmento_quantidade_0);
			acompanhmento_valor_0 = $('.grid_acompanhamento_0 .acompanhamento_0 input').val();
			$('#checkout .acompanhamento_confirma .sub_total_acompanhamento_0 input').val(acompanhmento_valor_0).show();
			$('.acompanhamento_nome_0, .quantidade_acompanhamento_0, .sub_total_acompanhamento_0').show();
		}
		else {
			$('.acompanhamento_nome_0, .quantidade_acompanhamento_0, .sub_total_acompanhamento_0').hide();
		}

		if ( media_acomp_1 >= 1 ) {
			$('.verificar_acompanhamento').show();
			acompanhamento_nome_1 = $('.grid_acompanhamento_1 .nome_acompanhamento').text();
			$('#checkout .acompanhamento_confirma .acompanhamento_nome_1').text(acompanhamento_nome_1);
			acompanhmento_quantidade_1 = $('.grid_acompanhamento_1 .acompanhamento_1 select').val();
			$('#checkout .acompanhamento_confirma .quantidade_acompanhamento_1').text(acompanhmento_quantidade_1);
			acompanhmento_valor_1 = $('.grid_acompanhamento_1 .acompanhamento_1 input').val();
			$('#checkout .acompanhamento_confirma .sub_total_acompanhamento_1 input').val(acompanhmento_valor_1).show();
			$('.acompanhamento_nome_1, .quantidade_acompanhamento_1, .sub_total_acompanhamento_1').show();
		}
		else {
			$('.acompanhamento_nome_1, .quantidade_acompanhamento_1, .sub_total_acompanhamento_1').hide();
		}

		if ( media_acomp_2 >= 1 ) {
			$('.verificar_acompanhamento').show();
			acompanhamento_nome_2 = $('.grid_acompanhamento_2 .nome_acompanhamento').text();
			$('#checkout .acompanhamento_confirma .acompanhamento_nome_2').text(acompanhamento_nome_2);
			acompanhmento_quantidade_2 = $('.grid_acompanhamento_2 .acompanhamento_2 select').val();
			$('#checkout .acompanhamento_confirma .quantidade_acompanhamento_2').text(acompanhmento_quantidade_2);
			acompanhmento_valor_2 = $('.grid_acompanhamento_2 .acompanhamento_2 input').val();
			$('#checkout .acompanhamento_confirma .sub_total_acompanhamento_2 input').val(acompanhmento_valor_2).show();
			$('.acompanhamento_nome_2, .quantidade_acompanhamento_2, .sub_total_acompanhamento_2').show();
		}
		else {
			$('.acompanhamento_nome_2, .quantidade_acompanhamento_2, .sub_total_acompanhamento_2').hide();
		}

		if ( media_acomp_3 >= 1 ) {
			$('.verificar_acompanhamento').show();
			acompanhamento_nome_3 = $('.grid_acompanhamento_3 .nome_acompanhamento').text();
			$('#checkout .acompanhamento_confirma .acompanhamento_nome_3').text(acompanhamento_nome_3);
			acompanhmento_quantidade_3 = $('.grid_acompanhamento_3 .acompanhamento_3 select').val();
			$('#checkout .acompanhamento_confirma .quantidade_acompanhamento_3').text(acompanhmento_quantidade_3);
			acompanhmento_valor_3 = $('.grid_acompanhamento_3 .acompanhamento_3 input').val();
			$('#checkout .acompanhamento_confirma .sub_total_acompanhamento_3 input').val(acompanhmento_valor_3).show();
			$('.acompanhamento_nome_3, .quantidade_acompanhamento_3, .sub_total_acompanhamento_3').show();
		}
		else {
			$('.acompanhamento_nome_3, .quantidade_acompanhamento_3, .sub_total_acompanhamento_3').hide();
		}

		if ( media_acomp_4 >= 1 ) {
			$('.verificar_acompanhamento').show();
			acompanhamento_nome_4 = $('.grid_acompanhamento_4 .nome_acompanhamento').text();
			$('#checkout .acompanhamento_confirma .acompanhamento_nome_4').text(acompanhamento_nome_4);
			acompanhmento_quantidade_4 = $('.grid_acompanhamento_4 .acompanhamento_4 select').val();
			$('#checkout .acompanhamento_confirma .quantidade_acompanhamento_4').text(acompanhmento_quantidade_4);
			acompanhmento_valor_4 = $('.grid_acompanhamento_4 .acompanhamento_4 input').val();
			$('#checkout .acompanhamento_confirma .sub_total_acompanhamento_4 input').val(acompanhmento_valor_4).show();
			$('.acompanhamento_nome_4, .quantidade_acompanhamento_4, .sub_total_acompanhamento_4').show();
		}
		else {
			$('.acompanhamento_nome_4, .quantidade_acompanhamento_4, .sub_total_acompanhamento_4').hide();
		}

		if ( $('.campo_escolha label').hasClass('entregar active') ) {
			nome_servico = $('.entregar span').text();
			$('#checkout .servico_confirma .servico_nome').text(nome_servico);
			valor_servico = $('.entregar .valor_servico input').val();
			$('#checkout .servico_confirma .sub_total_servico input').val(valor_servico);
		}
		else if ( $('.campo_escolha label').hasClass('retirar active') ) {
			nome_servico = $('.retirar span').text();
			$('#checkout .servico_confirma .servico_nome').text(nome_servico);
			valor_servico = $('.retirar .valor_servico input').val();
			$('#checkout .servico_confirma .sub_total_servico input').val(valor_servico);
		}
		else if ( $('.campo_escolha label').hasClass('casa active') ) {
			nome_servico = $('.casa span').text();
			$('#checkout .servico_confirma .servico_nome').text(nome_servico);
			valor_servico = $('.casa .valor_servico input').val();
			$('#checkout .servico_confirma .sub_total_servico input').val(valor_servico);
		}

		conclusao_compra_total = $('.total_pedido_content input').val();
		$('.confirma_pedido_total .conclusao_total_soma input').val(conclusao_compra_total);
	});


});/*end all*/