function inputBhaskara() {
	var a, b, c, delta, x1, x2;

	a = parseFloat(document.formBhaskara.valorA.value);
	b = parseFloat(document.formBhaskara.valorB.value);
	c = parseFloat(document.formBhaskara.valorC.value);

	delta = ((b*b) - 4 * a * c);
	x1 = ((-b + Math.sqrt(delta)) / (2 * a));
	x2 = ((-b - Math.sqrt(delta)) / (2 * a));

	document.getElementById('tB').value = "Δ = b² - 4 * a * c\nΔ = " + b + "² - 4 * " + a +
		 " * " + c + "\nΔ = " + delta + "\nx = -b +- √Δ / 2 * a\nx = -(" + b + ") +- √" + 
		 delta + " / 2 * " + a + "\nx1 = -(" + b + ") + √" + delta + " / 2 * " + a + "\nx1 = " + x1 + 
		 "\nx2 = -(" + b + ") - √" + delta + " / 2 * " + a + "\nx2 = " + x2;
}