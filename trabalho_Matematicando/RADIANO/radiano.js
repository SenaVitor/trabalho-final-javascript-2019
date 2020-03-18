function radiano() {
	
	var g = parseFloat(document.formRadiano.valorGraus.value);
	const pi = 3.14;

	var angulo = (g * pi) / 180;
	var g1 = 180 / g;

	document.getElementById('resultadoRadiano').value = "π = 3.14\n180 / " + g + 
	" = π / x\n" + g1.toFixed(3) + " = π / x\nπ / " + g1.toFixed(3) + " = x\nx = " + angulo.toFixed(3);
		
}