// --- Lógica de Login ---
const form = document.querySelector('.contenedor');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputUsuario = form.querySelector('input[name="usuario"]').value;
    const inputContrasena = form.querySelector('input[name="contrasena"]').value;

    // Obtener usuarios desde localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar usuario válido
    const usuarioValido = usuarios.find(u => 
        (u.usuario === inputUsuario || u.correo === inputUsuario) &&
        u.contrasena === inputContrasena
    );

    if (usuarioValido) {
        window.location.href = "bienvenido.html";
    } else {
        window.location.href = "error.html";
    }
});

// --- Mostrar/Ocultar contraseña ---
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Cambiar el ícono entre mostrar y ocultar
    togglePassword.classList.toggle('bx-show');
    togglePassword.classList.toggle('bx-hide');
});
