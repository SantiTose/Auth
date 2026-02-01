const { response } = require("express");

const button = document.getElementById('reoverBtn');
const message = document.getElementById('message');

button.addEventListener('click', async () => {
    const username = document.getElementById('username').value; // Lee lo que escribe el usuario

    if (!username){
        message.textContent = "Ingresa tu usuario";
        return;
    }
// Hacemos una peticion http al backend
    const response = await fetch("http>//localhost:3000/forgot-password",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username }) // mandamos el username como JSON
    });
    const data = await response.json(); // Transformamos lo que devuelve a js
    message.textContent = data.message;
});
 