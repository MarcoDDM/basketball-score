let punto1 = document.getElementById("boton1");
let punto2 = document.getElementById("boton2");
let punto3 = document.getElementById("boton3");
let count1 = 0;
let count2 = 0;


function add1() {
	count1 = count1 + 1
	score1.textContent = count1;
}

function add2() {
	count1 = count1 + 2
	score1.textContent = count1;
}

function add3() {
	count1 = count1 + 3
	score1.textContent = count1;
}

function add1pt() {
	count2 = count2 + 1
	score2.textContent = count2;
}

function add2pt() {
	count2 = count2 + 2
	score2.textContent = count2;
}

function add3pt() {
	count2 = count2 + 3
	score2.textContent = count2;
}

function reset() {
	score1.textContent = 0
	score2.textContent = 0
	count1 = 0
	count2 = 0
}
