// Escucha Document Loaded DOM
document.addEventListener("DOMContentLoaded", () => {

    // Formulario LOGIN del index
  
    // Validar formato del email
    function validateEmail(email) {
      const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return re.test(email);
    }
  
    // Elementos de campos de entrada + botón de inicio de sesión
    const userField = document.getElementById('user');
    const pwField = document.getElementById('pw');
    const loginButton = document.getElementById('index-login-btn');
  
    // Evento 'click' al botón de inicio de sesión
    loginButton.addEventListener('click', function(event) {
      // Verifica si formato del email es correcto
      if (!validateEmail(userField.value.trim())) {
        // Si el formato del email no es correcto, muestra mensaje de advertencia
        alert('Por favor, introduce un email válido.');
        event.preventDefault(); // Detiene la redirección a la página "instructions.html"
      } else {
        // Si el formato del email es correcto, guarda la información del usuario en el "sessionStorage"
        sessionStorage.setItem('user', userField.value.trim());
        // Redirige a la página "instructions.html"
        window.location.href = 'instructions.html';
      }
    });
  
    // Elemento del campo de entrada del usuario en la página "instructions.html"
    const userLoginField = document.getElementById('user-login');
  
    // Carga la información del usuario desde el "sessionStorage" cuando el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        // Incorpora el valor del email en el input con id="user-login"
        userLoginField.value = storedUser;
      }
    });
  
    // Evento 'click' al botón de cierre de sesión
    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function(event) {
      // Eliminar información del usuario del "sessionStorage"
      sessionStorage.removeItem('user');
      // Rediregir a página de inicio
      window.location.href = 'index.html';
    });
  
  });
