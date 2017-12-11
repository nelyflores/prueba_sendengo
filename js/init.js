
//funcion que muestra formulario de publicar carga
var mostrartitulo = document.getElementById("titulo_header")
var textoIzq = document.getElementById("formulario-publica-carga");
var textoDer = document.getElementById("formulario-publicar-flota");
var cont = 0;
//Función que verifica los links
function verificaClick(event) {
	cont++;
	var obj = event.target;
	if (cont % 2 != 0) {
		ocultar(obj);
	} else if (cont % 2 == 0) {
		mostrar(obj);
	}
}

function ocultar(obj) {
	if (obj.id == 1) {
		textoIzq.style.display = "none";
		mostrartitulo.style.display='';
	} else if (obj.id == 2) {
		textoDer.style.display = "none";
		mostrartitulo.style.display='';
	}
}
// Función para mostrar el texto
function mostrar(obj) {
	if (obj.id == 1) {
		textoIzq.style.display = ''
		mostrartitulo.style.display='none';
	} else if (obj.id == 2) {
		textoDer.style.display = '';
		mostrartitulo.style.display='none';
	}
}


//Validando datos formulario publica tu carga
function validar(){
	var categoria, tipo, subtipo, descripcion, origen, destino, fecha, tarifas,terminos;
	categoria =document.getElementById('categoria').value;
	tipo =document.getElementById('tipo').value;
	subtipo = document.getElementById('subtipo').value;
	origen= document.getElementById('origen').value;
	destino= document.getElementById('destino').value;
	fecha= document.getElementById('fecha').value;
	tarifas= document.getElementById('tarifa').value;
	terminos= document.getElementById('terminos');
	var textoDer = document.getElementById("formulario-publicar-flota");
	var textoIzq = document.getElementById("formulario-publica-carga");

	if((categoria=='valorpordefecto')||(tipo=='valorpordefecto')
		||(subtipo=='valorpordefecto')||(origen == "")||(destino == "")||(fecha == "")||(tarifas == "")||(!terminos.checked)){
		swal("Antes de enviar", "Todos los campos son obligatorios!", "error");
	return false;
}else{
	textoDer.style.display='';
	textoIzq.style.display='none';

}

}

function validarFlota(){
	var nombre, apellidopat, apellidomat, correo, cel, cajaseca, cajarefri, conteninter, vehiculopeque, vehiculoesp, hazmat, consolidado;
	nombre= document.getElementById('nombre').value;
	apellidopat= document.getElementById('apellidopaterno').value;
	apellidomat= document.getElementById('apellidomaterno').value;
	correo= document.getElementById('correo').value;
	cel= document.getElementById('cel').value;
	cajaseca=document.getElementById('CajaSeca');
	cajarefri=document.getElementById('CajaRefrigerada');
	conteninter=document.getElementById('contenedorIntermodal');
	vehiculopeque= document.getElementById('Vehiculopequeño');
	vehiculoesp=document.getElementById('VehiculoEspecializado');
	hazmat= document.getElementById('Hazmat');
	consolidado=document.getElementById('Consolidado');
	terminoscondicion= document.getElementById('terminoycondicion');
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	expcel=/^\d{9}$/;




	//validando que todos los campos se llenen  y que el correo y telefono sean validos
	if(nombre == ''){
		swal("Antes de enviar", "Por favor ingrese su nombre!", "error");
	}else if (apellidopat=='') {
		swal("Antes de enviar", "Por favor ingrese su apellido paterno!", "error");
	} else if (apellidomat=='') {
		swal("Antes de enviar", "Por favor ingrese su apellido materno!", "error");
	} else if (correo =='') {
		swal("Antes de enviar", "Por favor ingrese su correo!", "error");
	}else if (cel == '') {
		swal("Antes de enviar", "Por favor ingrese su numero de celular!", "error");
	} else if (!cajaseca.checked && !cajarefri.checked && !conteninter.checked &&
		!vehiculopeque.checked && !vehiculoesp.checked && !hazmat.checked && !consolidado.checked){
		swal("Antes de enviar", "Por favor selecciona el tipo de flota", "error");
	} else if (!terminoscondicion.checked){
		swal("Antes de enviar", "Acepta teminos y condiciones", "error");		
	} else if(!expr.test(correo) ) {
		swal("Antes de enviar", "Correo no valido ", "error");		
	}else if (isNaN(cel) || !expcel.test(cel)){
		swal("Antes de enviar", "Debes ingresar un numero con el formato correcto", "error");
	}else{
		swal("Antes de enviar", "Tus datos han sido enviados", "success");
		textoDer.style.display = "none";
		mostrartitulo.style.display='';
	}
}

//funcion para cambiar el nav con el scroll

window.onscroll = scroll; //cuando hacemos scroll llamamos a la función
function scroll(){
	   //coge el valor del scroll en pixeles
	   var sc = window.pageYOffset; 
	   //registramos el valor scroll en la consola por si tenemos que hacer ajustes, saber dónde
	   console.log('window.pageYOffset = '+sc); 
	   if(sc >= 476){
	   	$('nav').css({'margin-top': 0});
	   	$('#navpublicacarga, #navregistraflota').css({'display':''});
	   } else if(sc <476){
	   	$('nav').css({'margin-top': 30});
	   	$('#navpublicacarga, #navregistraflota').css({'display':'none'});

    }
}



(function($){
	$(function(){

		$('.button-collapse').sideNav();
		$('.parallax').parallax();

  }); // end of document ready
})(jQuery);

 // end of jQuery name space
 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Hoy',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
});


       $(document).ready(function() {
       	$('select').material_select();
       });
