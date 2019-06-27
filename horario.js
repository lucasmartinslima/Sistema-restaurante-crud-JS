
setInterval(()=>{
	
var data = new Date();

var dia     = data.getDate();           // 1-31
var mes     = data.getMonth() + 1;          // 0-11 (zero=janeiro)     
var ano4    = data.getFullYear();       // 4 dígitos
	
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
	
if(min < 10){
var horario = document.getElementById('horario');
horario.innerHTML = ' ' + hora + ':0' + min + ':' + seg  + ' ' + dia + '/' + mes + '/' + ano4;
}else{
var horario = document.getElementById('horario');
horario.innerHTML = ' ' + hora + ':' + min + ':' + seg  + ' ' + dia + '/' + mes + '/' + ano4;
}

if(hora < 10){
var horario = document.getElementById('horario');
horario.innerHTML = '0' + hora + ':' + min + ':' + seg  + ' ' + dia + '/' + mes + '/' + ano4;
}
	
if(hora < 10 && seg < 10){
var horario = document.getElementById('horario');
horario.innerHTML = '0' + hora + ':' + min + ':0' + seg  + ' ' + dia + '/' + mes + '/' + ano4;
}
	
if((hora < 10) && (min < 10)){
var horario = document.getElementById('horario');
horario.innerHTML = '0' + hora + ':0' + min + ':' + seg  + ' ' + dia + '/' + mes + '/' + ano4;
}

if(hora < 10 && min < 10 && seg < 10){
var horario = document.getElementById('horario');
horario.innerHTML = '0' + hora + ':0' + min + ':0' + seg  + ' ' + dia + '/' + mes + '/' + ano4;		
}
	

	
}, 999)

	
	