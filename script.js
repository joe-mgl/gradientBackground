var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('random')

// Default settings - background matches initial values
body.style.background = "linear-gradient(to right, "
	+ color1.getAttribute('value')
	+ ", "
	+ color2.getAttribute('value')
	+ ")";
css.textContent = body.style.background; // shows the initial value of colors

// User Settings - User picks the background colors
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background;
}

// Random Background Colors
function setRandom() {
	// random code generator from css-tricks. modified based on requirements
	var randColor1 = "#" + (Math.floor(Math.random()*16777215).toString(16));
	var randColor2 = "#" + (Math.floor(Math.random()*16777215).toString(16));
	body.style.background = 
	"linear-gradient(to right, "
	+ randColor1
	+ ", "
	+ randColor2
	+ ")";

	css.textContent = body.style.background;


}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandom);


