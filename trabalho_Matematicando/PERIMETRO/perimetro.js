function perimetros() {
	var opcao, lado, altura, largura, raio, result;

	opcao = parseInt(document.formPerimetro.opcao.value);

	switch(opcao) {
		case 1:
			lado = parseInt(document.formPerimetro.quadradoPerimetro.value);
			result = lado * 4;
			document.getElementById('resultadoId').value = result;
		break;

		case 2:
			raio = parseInt(document.formPerimetro.circunferenciaPerimetro.value)
			result = 2 * 3.14 * raio;
			document.getElementById('resultadoId').value = result.toFixed(2);
		break;

		case 3:
			altura = parseInt(document.formPerimetro.retanguloAltura.value);
			largura = parseInt(document.formPerimetro.retanguloLargura.value);
			result = ((altura * 2) + (largura * 2));
			document.getElementById('resultadoId').value = result.toFixed(2);
		break;
	}
}

function mostrarEsconder() {
	var opcao;
	opcao = parseInt(document.formPerimetro.opcao.value);

	switch(opcao) {
		case 1:
			document.getElementById('divQuadrado').style.display = "inline-block";
			document.getElementById('divCircunferencia').style.display = "none";
			document.getElementById('divRetangulo').style.display = "none";
			document.getElementById('resultadoId').value = "";
		break;

		case 2:
			document.getElementById('divQuadrado').style.display = "none";
			document.getElementById('divCircunferencia').style.display = "inline-block";
			document.getElementById('divRetangulo').style.display = "none";
			document.getElementById('resultadoId').value = "";
		break;

		case 3:
			document.getElementById('divQuadrado').style.display = "none";
			document.getElementById('divCircunferencia').style.display = "none";
			document.getElementById('divRetangulo').style.display = "inline-block";
			document.getElementById('resultadoId').value = "";
		break;

		default:
			document.getElementById('divQuadrado').style.display = "none";
			document.getElementById('divCircunferencia').style.display = "none";
			document.getElementById('divRetangulo').style.display = "none";
			document.getElementById('resultadoId').value = "";
		break;
	}
}