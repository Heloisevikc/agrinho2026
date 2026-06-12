// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Botão "Saiba Mais"
const saibaBtn = document.getElementById('saibaMaisBtn');
if(saibaBtn) {
    saibaBtn.addEventListener('click', () => {
        document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
    });
}

// Animação dos números (efeito contagem)
const statsNumbers = document.querySelectorAll('.stat-num');
const animateNumbers = () => {
    statsNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateNumber = () => {
            current += increment;
            if(current < target) {
                stat.innerText = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.innerText = target;
            }
        };
        updateNumber();
    });
};

// Gatilho para contar quando a seção aparecer
const heroSection = document.querySelector('.hero');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        animateNumbers();
        observer.unobserve(heroSection);
    }
}, { threshold: 0.5 });
observer.observe(heroSection);

// Slider interativo
const slider = document.getElementById('impactSlider');
const impactText = document.getElementById('impactText');
if(slider) {
    slider.addEventListener('input', (e) => {
        const val = e.target.value;
        impactText.innerHTML = `Área com manejo sustentável: <strong>${val}%</strong>`;
        if(val >= 70) {
            impactText.style.color = "#2b7a3e";
        } else {
            impactText.style.color = "#1e2f1e";
        }
    });
}

// Quiz / curiosidade
const quizBtn = document.getElementById('quizBtn');
const quizAnswer = document.getElementById('quizAnswer');
if(quizBtn) {
    quizBtn.addEventListener('click', () => {
        quizAnswer.innerHTML = "🌱 Sabia que sistemas agroflorestais podem recuperar solos degradados em 5 anos? Agro forte + floresta em pé = clima regulado!";
    });
}

// Formulário de contato
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        if(nome && email) {
            feedback.innerHTML = "✅ Mensagem enviada! Obrigado por apoiar o futuro sustentável 🌿";
            feedback.style.color = "#2b7a3e";
            form.reset();
        } else {
            feedback.innerHTML = "❌ Preencha nome e e-mail.";
            feedback.style.color = "#c73b1e";
        }
        setTimeout(() => feedback.innerHTML = "", 3000);
    });
}
