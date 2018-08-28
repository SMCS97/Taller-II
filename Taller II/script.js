function validarFormulario()
{
var enviar = true;
var codigo = document.getElementById("codigo");	
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var genero = document.getElementById("genero");
var edad = document.getElementById("edad");
var comentario = document.getElementById("comentario");
var formulario = document.getElementById("formulario");
var expcod = /^[0-9]+$/;  
var expnom = /^[a-záéíóúñ\s]+$/i;
var expemail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/; 

if(!codigo.value)
	{
		alert("Escriba su Codigo");
		enviar=false;
		codigo.focus();
	} 
	else if (!expcod.exec(codigo.value))
	{
		alert("Ingrese solo Numeros");
		enviar=false;
		codigo.focus();
	}
	else if(!nombre.value)
	{
		alert("Escriba su Nombre");
		enviar=false;
		nombre.focus();
	} 
	else if (!expnom.exec(nombre.value))
	{
		alert("Ingrese solo letras");
		enviar=false;
		nombre.focus();
	}
	else if(!apellido.value)
	{
		alert("Escriba su Apellido");
		enviar=false;
		apellido.focus();
	} 
	else if (!expnom.exec(apellido.value))
	{
		alert("Ingrese solo letras");
		enviar=false;
		apellido.focus();
	}
	else if(!telefono.value)
	{
		alert("Escriba su Telefono");
		enviar=false;
		telefono.focus();
	} 
	else if (!expcod.exec(telefono.value))
	{
		alert("Ingrese solo Numeros");
		enviar=false;
		telefono.focus();
	}
	else if(!email.value)
	{
		alert("Escriba su Email");
		enviar=false;
		email.focus();
	} 
	else if (!expemail.exec(email.value))
	{
		alert("Email no valido");
		enviar=false;
		email.focus();
	}
	else if(!genero.value)
	{
		alert("Escriba su Genero");
		enviar=false;
		genero.focus();
	} 
	else if(!edad.value)
	{
		alert("Escriba su Edad");
		enviar=false;
		edad.focus();
	} 
	else if (!expcod.exec(edad.value))
	{
		alert("Ingrese solo Numeros");
		enviar=false;
		edad.focus();
	}
	else if(!comentario.value)
	{
		alert("Escriba un comentario");
		enviar=false;
		comentario.focus();
	} 
	
if (enviar)
{
	document.formulario.submit();
}

}

window.onload=function()
{
	var botonEnviar = document.getElementById("enviar");
	botonEnviar.onclick=validarFormulario;
}





