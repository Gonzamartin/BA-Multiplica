function promo(){
    Swal.fire({
        title: "REGISTRATE" ,
        text: "Hay 10 % de DESCUENTO !",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#008500",
        cancelButtonColor: "#d33",
        background: "#ffffff",
        backdrop: 'rgba(208, 211, 212 ,0.55)',
        confirmButtonText: "Registrame",

    }).then((result) => {
        if (result.isConfirmed) {
            location.href="contacto.html"
        }
    });
}
