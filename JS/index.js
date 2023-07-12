/////// LOGIN ////////
function login(){
    const usuario = document.getElementById('user')
    const pass= document.getElementById('pass')

    //Validar los campos
    if ( usuario.value == "" || pass.value == "" ){
        document.getElementById("mensaje1").innerHTML = "No se admiten campos vacíos"
       // alert("No se admiten campos vacíos")
       swal("No se admiten campos vacíos");

    }else if ( usuario.value == "admin" && pass.value == "root" ){
        document.getElementById("mensaje1").innerHTML= "Acceso correcto"
        //alert("Acceso correcto")
        swal("Acceso correcto!", "Bienvenido "+ usuario.value, "success");

    } else{
        document.getElementById('mensaje1').innerHTML= "Credenciales incorrectas"
        //alert("Credenciales incorrectas")
        swal("Credenciales incorrectas!", "Verifique usuario y contraseña", "error");
    }
}

//////////// CALCULADORA //////////////////
//SUMAR
function sumar(){
    const num1 = parseFloat( document.getElementById('num1').value )
    const num2 = parseFloat( document.getElementById('num2').value )

    let suma;

    //VALIDAR LOS CAMPOS
    if( isNaN(num1) || isNaN(num2)){
        //alert("No se admiten campos en blanco")
        Swal.fire(
            'Tarea',
            'Personalice los mensajes de alerta',
            'succes'
          )
    }else{
        suma= num1 + num2
        //alert("La suma es: "+ suma)
        Swal.fire('La suma es: '+ suma)
    }
}

//RESTAR
function restar(){
    const num1 = parseFloat( document.getElementById('num1').value )
    const num2 = parseFloat( document.getElementById('num2').value)

    //VALIDAR CAMPOS
    if( isNaN(num1) || isNaN(num2)){
        alert("No se admiten campos en blanco")
    }else{
        alert("La resta es: " + (num1-num2) )
    }
}


/////////// LISTA DE TAREAS /////////////////////
function agregarTarea(){
    const tarea = document.getElementById('tarea').value

    //VALIDAR CAMPOS
    if( tarea == ""){
        alert("No se admiten campos en blanco")
    }else{
       
        let nuevaTarea = document.createElement('li')
        nuevaTarea.textContent = tarea

        let lista = document.getElementById('lista')
        lista.appendChild(nuevaTarea)
    }
}