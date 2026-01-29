const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

const newsletterForm = document.getElementById('newsletter-form');
const formMessage = document.getElementById('form-message');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const termsChecked = document.getElementById('terms').checked;
    
    if (!name || !email || !experience || !termsChecked) {
        showMessage('Please fill out all required fields and accept the terms.', 'error');
        return;
    }
    
    showMessage('Thank you for subscribing! Check your email for confirmation.', 'success');
    
    setTimeout(() => {
        newsletterForm.reset();
        formMessage.style.display = 'none';
    }, 5000);
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('load', () => {
    const tableRows = document.querySelectorAll('.stock-table tbody tr');
    tableRows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            row.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100);
    });
});
