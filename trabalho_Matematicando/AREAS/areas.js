function aQuadrado() {
	var L, area;
	L = parseFloat(document.calcularAreaQuadrado.valorAreaQuadrado.value);
	area = (L * L);
	document.getElementById('rAQ').value = area + "m²";
}

function aCircunferencia() {
	var R, area;
	const pi = 3.14;
	R = parseFloat(document.calcularAreaCircunferencia.valorAreaCircunferencia.value);
	area = (R * R) * pi;
	document.getElementById('rAC').value = area + "cm²";
}

function aTriangulo() {
	var b, h, area;
	b = parseFloat(document.calcularAreaTriangulo.valorAreaTriangulo.value);
	h = parseFloat(document.calcularAreaTriangulo.valor2AreaTriangulo.value);

	area = (b * h) / 2;

	document.getElementById('rAT').value = area + "m²";
}