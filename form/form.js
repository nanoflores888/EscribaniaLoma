var nameError = document.getElementById('name-error');

function validarNombre(){
  let nombre = document.getElementById('nombre')
  if (nombre.length == 0){
    nameError.innerHTML = 'Por favor escriba su nombre'
    return false;
  }
  nameError = 'ok';
  return true;s 
}
