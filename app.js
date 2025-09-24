// Simulación de base de datos en el frontend
const users = [
    { email: "admin@gmail.com", password: "1234", role: "admin" },
    { email: "user@gmail.com", password: "abcd", role: "user" }
];

function login(event) {
    event.preventDefault(); // evita recargar la página

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    const found = users.find(u => u.email === email && u.password === pass);

    if (found) {
        error.textContent = "";

        if (found.role === "admin") {
            window.location.href = "Admin/Admin.html"; // 🔴 admin va a admin.html
        } else {
            window.location.href = "Usuario/index.html"; // 🟢 usuario normal va a home.html
        }
    } else {
        error.textContent = "❌ Usuario o contraseña incorrectos";
    }
}

