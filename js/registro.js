// Obtenemos referencias al formulario y la tabla
const form = document.getElementById('formRegistro');
const tabla = document.getElementById('tablaUsuarios').querySelector('tbody');

// Función para cargar los usuarios desde localStorage y mostrarlos en la tabla
const cargarUsuarios = () => {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    tabla.innerHTML = ""; // Limpiar la tabla antes de agregar

    usuarios.forEach(datos => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${datos.usuario}</td>
                          <td>${datos.nombre}</td>
                          <td>${datos.apellido}</td>
                          <td>${datos.telefono}</td>
                          <td>${datos.correo}</td>
                          <td>${datos.edad}</td>`;
        tabla.appendChild(fila);
    });
};

// Llamamos a la función al cargar la página
cargarUsuarios();

// Evento al enviar el formulario
form.addEventListener('submit', function(e){
    e.preventDefault(); // Evita que se recargue la página

    const usuario = form.usuario.value;
    const contrasena = form.contrasena.value;
    const repetirContrasena = form.repetirContrasena.value;

    // Validación de contraseña
    if(contrasena !== repetirContrasena){
        alert("Las contraseñas no coinciden");
        return;
    }

    // Creamos el objeto con todos los datos del usuario
    const datos = {
        usuario: usuario,
        contrasena: contrasena,
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        telefono: form.telefono.value,
        correo: form.correo.value,
        edad: form.edad.value
    };

    // Guardamos en localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(datos);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Agregamos la fila a la tabla
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${datos.usuario}</td>
                      <td>${datos.nombre}</td>
                      <td>${datos.apellido}</td>
                      <td>${datos.telefono}</td>
                      <td>${datos.correo}</td>
                      <td>${datos.edad}</td>`;
    tabla.appendChild(fila);

    // Limpiar el formulario
    form.reset();
    alert("Usuario registrado correctamente");
});