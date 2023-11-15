

function aplicar(){
    
    const nombre = document.querySelector("#nombreapellido").value; 
    const email = document.querySelector("#correoelectrónico").value;
    const telefono = document.querySelector("#teléfono").value;

    if (nombre ==="" || email==="" || telefono==="" ){
         // Muestra alerta
        Swal.fire({ 
            title: 'Error!',
            text: 'Hay campos sin completar',
            icon: 'error',
            confirmButtonText: 'Confirmar',
        })
    }else{
        Swal.fire({ 
            title: 'Gracias'+ " " + nombre +"!" ,
            text: 'Hemos registrado su información',
            icon: 'success',
            confirmButtonText: 'OK',
            })
        }

    }





    






