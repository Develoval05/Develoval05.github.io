/* ================================================================== */
/* CYMIBSA | DARK MODE TOGGLE - CAMBIO DE TEMA                       */
/* ================================================================== */

// Función para obtener el tema actual del localStorage
function getCurrentTheme() {
    const savedTheme = localStorage.getItem('cymibsa-theme');
    if (savedTheme) {
        return savedTheme;
    }
    // Detectar preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
}

// Función para aplicar el tema
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cymibsa-theme', theme);
    
    // Actualizar texto del botón si existe
    const themeText = document.querySelector('.theme-toggle-text');
    if (themeText) {
        if (theme === 'light') {
            themeText.textContent = 'Modo oscuro';
        } else {
            themeText.textContent = 'Modo claro';
        }
    }
}

// Función para alternar entre temas
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Agregar animación sutil al cambiar
    const body = document.body;
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        body.style.transition = '';
    }, 300);
}

// Inicializar el tema al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);
    
    // Buscar el botón de tema y agregar el evento
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Escuchar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
    // Solo cambiar si no hay una preferencia guardada manualmente
    if (!localStorage.getItem('cymibsa-theme')) {
        const newTheme = e.matches ? 'light' : 'dark';
        setTheme(newTheme);
    }
});