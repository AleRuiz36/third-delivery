
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');


let users = JSON.parse(localStorage.getItem('users')) || [];


signUpButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    if (!name || !email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }


    if (users.some(user => user.email === email)) {
        alert('El correo ya está registrado.');
        return;
    }


    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');


    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
});


signInButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

 
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`¡Bienvenido, ${user.name}! Inicio de sesión exitoso. Excepto si eres Nata`);
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});

