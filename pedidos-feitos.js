
function showPedidos(){
	
var navPedidos = document.getElementById('pedidos')
var pedidos = JSON.parse(localStorage.getItem('PedidoCliente'))

navPedidos.innerHTML = '';
navPedidos.innerHTML = '<tr class="cabecalho" id="cabecalhoTable"><th>Nome Pessoa</th><th>Data e hora</th><th>Dinheiro dado ao atendente</th><th>Qnt. Alimentos</th><th>Ver alim.</th></tr> ';	

for(i = pedidos.length-1; i != -1; i--){
	var nome = pedidos[i].nomeCliente;
	
	var dia = pedidos[i].dia; var mes = pedidos[i].mes; var ano = pedidos[i].ano;
	var hora = pedidos[i].hora; 	var min = pedidos[i].minutos; 
	
	var diheiroDado = pedidos[i].dinheiroCliente;
	var alimentos = pedidos[i].comida;

navPedidos.innerHTML += '<tr><td>'+nome+'</td> <td>'+dia+'/'+mes+'/'+ano+' - '+ hora +':'+min+'</td> <td>R$ '+diheiroDado+'</td> <td >'+alimentos.length+'</td><td><img onmouseover="showAlimentos('+i+')" onmouseleave="esconderAlimentos()" src="icones-funcionais/ver.png" class="icone-funcional"></td> </tr>';
		
}
}

function showAlimentos(id){
	
var principal = document.getElementById('Alimentos')
principal.style.visibility = 'visible';

	var divAlimentos = document.getElementById('divAlimentos')
	var pedidos = JSON.parse(localStorage.getItem('PedidoCliente'))
	var alimentos = pedidos[id].comida;
	
	console.log(alimentos);
	divAlimentos.innerHTML = '<hr/>';
	
	var total = 0;
	
	for(i = 0; i < alimentos.length; i++){
		
divAlimentos.innerHTML += '<p>' + alimentos[i].nome_alimento+ ' R$ '+  alimentos[i].preco_alimento +'</p>';
		
		total +=  parseFloat(alimentos[i].preco_alimento);
		
		console.log(alimentos[i].nome_alimento);
	}
	
	divAlimentos.innerHTML += '<hr/>  <p> Preço total: '+total+'</p>';
}



function esconderAlimentos(){
	var divAlimentos = document.getElementById('Alimentos')
	
	divAlimentos.style.visibility = 'hidden';
}