function iniMenu(){
	fecharMenu();
}

var iconeFechar = document.getElementById('icone-menu');
var menu = document.getElementById('menu');

var iconeAbrir = document.getElementById('icon-menu');

iconeFechar.addEventListener('click', fecharMenu, false);
iconeAbrir.addEventListener('click', abrirMenu, false);



function fecharMenu(){
menu.style.visibility = 'hidden';
}

function abrirMenu(){
menu.style.visibility = 'visible';
	
	
}