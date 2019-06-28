let input = "";

$('.btn').click(function () {
	let symbol = $(this).data('value');

	if (((input[input.length - 1] == '+' || input[input.length - 1] == '-') && (symbol == '+' || symbol == '-'))
		|| (input.length == 0 && (symbol == '+' || symbol == '-')) || ((input[input.length - 2] == '+' || input[input.length - 2] == '-') && input[input.length - 1] == '0' && symbol == '0')) {
		return;
	}

	if (symbol == '=') {
		result = eval($('input').val());
		$('input').val(result);
		input = "";
		return;
	}

	input += symbol;
	$('input').val(input);
})