
function crear(){
    if (document.form.password.value=='doctor1234' && document.form.login.value=='doctor123'){ 
        success();
    }
    else{ 
        error();
    }
}
crear();


function success() {
    Swal.fire(
        'Bienvenido: Doctor',
        'Manos a la obra...',
        'success'
      )
}

function error() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al iniciar sesión',
        footer: '<a href="http://www.utez.edu.mx/" target="_blank" >Olvidé mi contraseña</a>'
      })
}

//var usuario=parseInt(document.getElementById("usuario").value);
//var contraseña=parseInt(document.getElementById("contraseña").value);