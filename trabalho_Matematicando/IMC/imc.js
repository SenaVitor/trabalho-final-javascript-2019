function imc() {
	var altura, peso, result;

	altura = parseFloat(document.formIMC.valorAltura.value);
	peso = parseFloat(document.formIMC.valorPeso.value);

 	result = peso / (altura * altura);

 	if(result < 17) {
 		document.getElementById('resultadoIMC').value = "Seu IMC é de: " + result.toFixed(2) + "\nVocê está muito abaixo do peso.";
 	}
 	else if(result >= 17 && result <= 18.49 ) {
 		document.getElementById('resultadoIMC').value = "Seu IMC é de: " + result.toFixed(2) + "\nVocê está abaixo do peso.";
 	}
 	else if (result >= 18.5 && result <= 24.99) {
 		document.getElementById('resultadoIMC').value = "Seu IMC é de: " + result.toFixed(2) + "\nVocê está no peso normal.";
 	}
 	else if (result >= 25 && result <= 29.99) {
 		document.getElementById('resultadoIMC').value = "Seu IMC é de: " + result.toFixed(2) + "\nVocê está acima do peso.";
 	}
 	else if (result >= 30 && result <= 34.99) {
 		document.getElementById('resultadoIMC').value = "Seu IMC é de: " + result.toFixed(2) + "\nVocê está com o grau de obesidade I.";
 	}
 	else if(result >= 35 && result <= 39.99){
 		document.getElementById('resultadoIMC').value = "Seu IMC é de: " + result.toFixed(2) + "\nVocê está com o grau de obesidade II (severa).";
 	}
 	else if(result >= 40){
 		document.getElementById('resultadoIMC').value = "Seu IMC é de: " + result.toFixed(2) + "\nVocê está com o grau de obesidade III (mórbida).";
 	}
}