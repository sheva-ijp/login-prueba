const form = document.querySelector('.contenedor');

form.addEventListener('submit', function(e){
    e.preventDefault(); // Evita que la página se recargue

    const inputUsuario = form.querySelector('input[name="usuario"]').value;
    const inputContrasena = form.querySelector('input[type="password"]').value;

    // Obtener usuarios desde localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar usuario que coincida con nombre de usuario o correo
    const usuarioValido = usuarios.find(u => 
        (u.usuario === inputUsuario || u.correo === inputUsuario) &&
        u.contrasena === inputContrasena
    );

    if(usuarioValido){
        // Login correcto
        window.location.href = "bienvenido.html";
    } else {
        // Login incorrecto
        window.location.href = "error.html";
    }
});