// ESCUCHA Document Loaded DOM

document.addEventListener("DOMContentLoaded", () => {

	// FORMULARIO LOGIN DEL INDEX
	  
		// Validar formato del email
		function validateEmail(email) {
		  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		  return re.test(email);
		}
	  
		// Elementos de campos de entrada + botón de inicio de sesión
		const userField = document.getElementById('user').value;
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
	
	
	// ANIMACIÓN DE LAS PROGRESS BAR
	
	  document.addEventListener("DOMContentLoaded", function() {
		
		// Actualizar el progreso del primer formulario
		function updateProgress1() {
			// Obtener referencias de campos del primer formulario
			const input1 = document.getElementById("f1-i1");
			const input2 = document.getElementById("f1-i2");
			const input3 = document.getElementById("f1-i3");
			const input4 = document.getElementById("f1-i4");
			const input5 = document.getElementById("f1-i5");
	
			// Obtener progress bar 1
			const progressBar = document.getElementById("progress-color-1");
	
			// Mirar si los campos están rellenos y aplicar cambios
			if (input1.value.trim() !== "") {
				progressBar.classList.add("pb-1");
			} else {
				progressBar.classList.remove("pb-1");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "") {
				progressBar.classList.add("pb-2");
			} else {
				progressBar.classList.remove("pb-2");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "") {
				progressBar.classList.add("pb-3");
			} else {
				progressBar.classList.remove("pb-3");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "" && input4.value.trim() !== "") {
				progressBar.classList.add("pb-4");
			} else {
				progressBar.classList.remove("pb-4");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "" && input4.value.trim() !== "" && input5.value.trim() !== "") {
				progressBar.classList.add("pb-5");
			} else {
				progressBar.classList.remove("pb-5");
			}
		}
	
		// Función para verificar y actualizar el progreso del segundo formulario
		   function updateProgress2() {
			// Obtener referencias de campos del segundo formulario
			const input1 = document.getElementById("f2-i1");
			const input2 = document.getElementById("f2-i2");
			const input3 = document.getElementById("f2-i3");
			const input4 = document.getElementById("f2-i4");
			const input5 = document.getElementById("f2-i5");
	
			// Obtener progress bar 2
			const progressBar = document.getElementById("progress-color-2");
	
			// Mirar si los campos están rellenos y aplicar cambios
			if (input1.value.trim() !== "") {
				progressBar.classList.add("pb-1");
			} else {
				progressBar.classList.remove("pb-1");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "") {
				progressBar.classList.add("pb-2");
			} else {
				progressBar.classList.remove("pb-2");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "") {
				progressBar.classList.add("pb-3");
			} else {
				progressBar.classList.remove("pb-3");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "" && input4.value.trim() !== "") {
				progressBar.classList.add("pb-4");
			} else {
				progressBar.classList.remove("pb-4");
			}
	
			if (input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "" && input4.value.trim() !== "" && input5.value.trim() !== "") {
				progressBar.classList.add("pb-5");
			} else {
				progressBar.classList.remove("pb-5");
			}
		}
	
		// Agregar escuchadores de eventos para los campos del primer formulario
		document.getElementById("f1-i1").addEventListener("change", updateProgress1);
		document.getElementById("f1-i2").addEventListener("change", updateProgress1);
		document.getElementById("f1-i3").addEventListener("change", updateProgress1);
		document.getElementById("f1-i4").addEventListener("change", updateProgress1);
		document.getElementById("f1-i5").addEventListener("change", updateProgress1);
	
		// Agregar escuchadores de eventos para los campos del segundo formulario
		document.getElementById("f2-i1").addEventListener("change", updateProgress2);
		document.getElementById("f2-i2").addEventListener("change", updateProgress2);
		document.getElementById("f2-i3").addEventListener("change", updateProgress2);
		document.getElementById("f2-i4").addEventListener("change", updateProgress2);
		document.getElementById("f2-i5").addEventListener("change", updateProgress2);
	  });
	
	
	  // VERIFICACIÓN FORMATO DE EMAIL EN FORMULARIO
	
	  document.addEventListener("DOMContentLoaded", function() {
		
		// Verificar el formato de correo electrónico
		function validateEmail(email) {
			// Validar el formato de correo electrónico
			const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return regex.test(email);
		}
	
		// Evento de cambio en el campo de entrada de correo electrónico
		function handleEmailChange() {
			// Obtener el valor del input
			var emailInput = document.getElementById("f1-i5");
			var emailValue = emailInput.value.trim();
	
			// Obtener referencia al botón de enviar
			var submitButton = document.getElementById("alumn-data-btn");
	
			// Verificar si el correo electrónico es válido
			if (validateEmail(emailValue)) {
				// Habilitar el botón de enviar
				submitButton.disabled = false;
			} else {
				// Deshabilitar el botón de enviar
				submitButton.disabled = true;
	
				// Mostrar un mensaje de advertencia
				alert("El formato del correo electrónico es incorrecto. Por favor, ingrese un correo electrónico válido.");
			}
		}
	
		// Agregar un escuchador de eventos de cambio al campo de entrada de correo electrónico
		document.getElementById("f1-i5").addEventListener("change", handleEmailChange);
	});

	/* API */
const dog_btn = document.getElementById('dog_btn');
const dog_result = document.getElementById('dog_result');

dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}