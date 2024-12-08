
let users = JSON.parse(localStorage.getItem('users')) || [];


document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;


    if (users.some(user => user.email === email)) {
        alert('El correo ya está registrado.');
        return;
    }


    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.reset();
});


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Inicio de sesión exitoso.');

    } else {
        alert('Credenciales incorrectas.');
    }
});
