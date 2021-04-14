function validar(){
	var validando = true;
	var testEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var nombre = document.getElementById('nombre').value;
	var correo = document.getElementById('correo').value;
	
	if(nombre.length < 5){
		validando = false;
	}

	if(!testEmail.test(correo)){
		validando = false;
	}

	if(!validando){
		validando = false;
	}

	return mensaje(validando);

}

function mensaje(res) {
	var err = document.getElementById('mensaje-err');
	var ok = document.getElementById('mensaje-ok');


	if(res === true){
		ok.setAttribute("class","ok");
		err.setAttribute("class","err");
		document.getElementById('correo').value="";
		document.getElementById('nombre').value="";
	}else{
		err.setAttribute("class","ok");
		ok.setAttribute("class","err");
		document.getElementById('correo').value="";
		document.getElementById('nombre').value="";
	}

}

