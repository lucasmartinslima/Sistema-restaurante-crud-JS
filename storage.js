// Aqui é onde registramos comidas, excluimos e mostramos na tela


// Botão cadastrar alimento
var btnCadatrar = document.getElementById('btnCadastrar');
btnCadastrar.addEventListener('click', salvarComida, false);

//Serve para atualizar a tabela
var filtroListener = document.getElementById('filtro');
filtroListener.addEventListener('mouseout', addNaTela, false)

//Ao carregar/recarregar a página
function Inicializar(){
    addNaTela()
}

// Função para salvar comida
 function salvarComida(e){

    // Pegar dados do fomulário
var nomeComida = document.getElementById('nomeComida').value; //Nome da comida
var precoComida = document.getElementById('precoComida').value;//preço da comida
var tipoComida = document.getElementById('tipoComida').value; //Ex: Refri, comida ou porção

    var comida = {
    nome: nomeComida,
    preco: precoComida,
    tipo: tipoComida
}

    if(localStorage.getItem('comida') == null){
            var comidas = [];
            comidas.push(comida);
            localStorage.setItem('comida', JSON.stringify(comidas));
        }else{
            var comidas = JSON.parse(localStorage.getItem('comida'));
            comidas.push(comida);
            localStorage.setItem('comida', JSON.stringify(comidas));
    }

    addNaTela()
	popItemAdd()
    e.preventDefault()
    }

// Para adicionar itens salvos no local storage na tabela
function addNaTela(){
        
        var table = document.getElementById('exibirComidas')
        var comidas = JSON.parse(localStorage.getItem('comida'));
   
		var filtro = document.getElementById('filtro').value;
	
	    console.log('Função chamada addNaTela()' + filtro)
	
        table.innerHTML = '<tr class="cabecalho" id="cabecalhoTable"><th>Tipo</th><th>Comida</th><th>Preço</th><th>Excluir</th></tr> ';

        for (var i =  0; i < comidas.length ; i++) {
            var nome = comidas[i].nome;
            var preco = comidas[i].preco;
            var tipo = comidas[i].tipo;
			
		// Se a comida for igual ao filtro escolhido mostrará ela
		if(comidas[i].tipo == filtro){
			table.innerHTML += '<tr><td> <img class="icone-comida" src="icones-comida/'+tipo + '.png"/> </td><td>'  + nome + '</td><td>' + preco + '</td><td> <img class="icone-funcional" src="icones-funcionais/excluir.png" onclick="removerItem('+i+')"/>    </td></tr>';
		//se o filtro for pra mostrar tudo ele executa o codigo de baixo
		}else if(filtro == 'tudo'){
				table.innerHTML += '<tr class="test"><td> <img class="icone-comida" src="icones-comida/'+tipo + '.png"/> </td><td>'  + nome + '</td><td>' + preco + '</td><td> <img class="icone-funcional" src="icones-funcionais/excluir.png" onclick="removerItem('+i+')"/>    </td></tr>';
		}

			
        }
}

function removerItem(obj){
    
    var comidas = JSON.parse(localStorage.getItem('comida'));
    comidas.splice(obj, 1);
    localStorage.setItem('comida', JSON.stringify(comidas));
  
    addNaTela() 
}

/* pop up na tela de item adicionado */ 
function popItemAdd(){
	document.getElementById('itemAdicionado').innerHTML =
	'<div class="popup" id="pop"><br>Item adicionado com sucesso!! </div>';
	setTimeout(removePopup, 950)	
}
/* Remover popup depois de algum tempo  */
function removePopup(){
	document.getElementById('pop').classList.toggle('noShow');
}



