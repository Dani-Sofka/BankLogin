document.addEventListener("DOMContentLoaded", function () {

    // Función que verifica si el usuario está logueado
    function checkSessionStatus(): void {
        const sessionStatus = document.getElementById("session-status") as HTMLElement;
        
        // Revisa si la clave "isLoggedIn" existe en sessionStorage y si su valor es "true"
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            // Si está logueado, muestra un mensaje en la página
            sessionStatus.textContent = "Estás logueado como 'usuario123'";
        } else {
            // Si no está logueado, muestra un mensaje diferente
            sessionStatus.textContent = "No estás logueado.";
        }
    }

    // Llama a la función al cargar la página para mostrar el estado de la sesión
    checkSessionStatus();

    // Evento cuando se envía el formulario de login
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    loginForm.addEventListener('submit', function (event: Event) {
        event.preventDefault(); // Evitar el envío del formulario

        const usernameInput = document.getElementById('username') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        const errorMessage = document.getElementById('error-message') as HTMLElement;

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Datos de ejemplo para validación
        const validUsername = 'usuario123';
        const validPassword = '123';

        // Validación del login
        if (username === validUsername && password === validPassword) {
            // Si las credenciales son correctas, guarda el estado en sessionStorage
            sessionStorage.setItem("isLoggedIn", "true"); // Guarda que el usuario está logueado

            console.log('Inicio de sesión exitoso, estado guardado en sessionStorage');
            
            // Muestra un mensaje en la página
            alert('Inicio de sesión exitoso');
            
            // Actualiza el estado de la sesión en la página sin recargarla
            checkSessionStatus();
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
            errorMessage.style.display = 'block';
        }
    });
});