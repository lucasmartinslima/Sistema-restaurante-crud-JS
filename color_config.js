var bodyBackground = document.getElementById('body');
var html = document.getElementById('html');   // html body

var linhaTable = document.getElementsByClassName('test');

var tableColor = document.getElementById('exibirComidas'); // tabela

var color = {
bgColor : '#222',   //padrao #222
colorText: 'black',  // white
tableBgColor: '#5e5e5e' // #5e5e5e
}

document.getElementsByTagName('td').onmouseenter = function() 
{
    this.style.backgroundColor = "blue";
}

bodyBackground.style.color = color.colorText; // cor do texto

tableColor.style.backgroundColor = color.tableBgColor; // cor da tabela

bodyBackground.style.backgroundColor = color.bgColor; // cor do background principal
html.style.backgroundColor =  color.bgColor; 

//vou mudar isso mais pra frente, mas o intuito é que cada pessoa possa editar seu próprio tema 