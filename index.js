// ----------------------------------------------------
// VINTAGE DIGITAL — JAVASCRIPT LOGIC
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Ferme le menu après avoir cliqué sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // 2. Interactive Dynamic Loss & Invisibility Calculator
    const tabNoSite = document.getElementById('tab-no-site');
    const tabSlowSite = document.getElementById('tab-slow-site');
    const inputsNoSite = document.getElementById('inputs-no-site');
    const inputsSlowSite = document.getElementById('inputs-slow-site');
    
    const volumeRange = document.getElementById('volume-range');
    const clientValRange = document.getElementById('client-val-range');
    const speedRange = document.getElementById('speed-range');
    const revRange = document.getElementById('rev-range');
    
    const volumeVal = document.getElementById('volume-val');
    const clientValVal = document.getElementById('client-val-val');
    const speedVal = document.getElementById('speed-val');
    const revVal = document.getElementById('rev-val');
    
    const lossVal = document.getElementById('loss-val');
    const calcDescText = document.getElementById('calc-desc-text');
    const calcHintText = document.getElementById('calc-hint-text');
    const resultLabelText = document.getElementById('result-label-text');
    const resultNoteText = document.getElementById('result-note-text');

    let currentMode = 'no-site'; // 'no-site' or 'slow-site'

    function calculateLoss() {
        if (currentMode === 'no-site') {
            const volume = parseInt(volumeRange.value);
            const clientValue = parseInt(clientValRange.value);
            
            // Si pas de site, on estime perdre 1.5% du volume de recherche locale comme clients potentiels
            const customersLost = volume * 0.015;
            const estimatedLoss = Math.round(customersLost * clientValue);
            
            volumeVal.textContent = volume;
            clientValVal.textContent = clientValue.toLocaleString('fr-FR') + ' €';
            lossVal.textContent = estimatedLoss.toLocaleString('fr-FR') + ' € / mois';
            
            resultLabelText.textContent = "Chiffre d'affaires local manqué (invisibilité) :";
            resultNoteText.textContent = `En captant seulement 1.5% de ces recherches (${customersLost.toFixed(1)} clients/mois).`;
        } else {
            const speed = parseFloat(speedRange.value);
            const revenue = parseInt(revRange.value);
            
            // Chaque seconde au-dessus de 1 seconde entraîne une perte de 7% du taux de conversion
            let lossPercentage = 0;
            if (speed > 1) {
                lossPercentage = (speed - 1) * 0.07;
            }
            
            const estimatedLoss = Math.round(revenue * lossPercentage);
            
            speedVal.textContent = speed.toFixed(1) + 's';
            revVal.textContent = revenue.toLocaleString('fr-FR') + ' €';
            lossVal.textContent = estimatedLoss.toLocaleString('fr-FR') + ' € / mois';
            
            resultLabelText.textContent = "Perte de chiffre d'affaires (lenteur mobile) :";
            resultNoteText.textContent = "Avec Vintage Digital, ramenez ce temps sous 0.8s et protégez vos marges.";
        }
    }

    if (tabNoSite && tabSlowSite) {
        tabNoSite.addEventListener('click', () => {
            currentMode = 'no-site';
            tabNoSite.classList.add('active');
            tabSlowSite.classList.remove('active');
            inputsNoSite.classList.remove('hidden');
            inputsSlowSite.classList.add('hidden');
            
            calcDescText.innerHTML = "Si vous n'apparaissez pas là où vos clients vous cherchent en local, vous offrez littéralement ces contrats à vos concurrents directs chaque mois.";
            calcHintText.textContent = "Ajustez les curseurs ci-contre pour estimer la valeur des chantiers et demandes d'appels locaux qui vous échappent faute de vitrine.";
            
            calculateLoss();
        });

        tabSlowSite.addEventListener('click', () => {
            currentMode = 'slow-site';
            tabSlowSite.classList.add('active');
            tabNoSite.classList.remove('active');
            inputsSlowSite.classList.remove('hidden');
            inputsNoSite.classList.add('hidden');
            
            calcDescText.innerHTML = "Google a démontré que si un site met plus de 3 secondes à charger, le taux de rebond augmente de 32 %. Si votre site est lent, vous laissez l'argent sur la table.";
            calcHintText.textContent = "Ajustez les curseurs ci-contre pour estimer votre perte de revenus mensuelle actuelle liée à la lenteur de chargement sur mobile.";
            
            calculateLoss();
        });
    }

    // Attach slider events
    if (volumeRange && clientValRange && speedRange && revRange) {
        volumeRange.addEventListener('input', calculateLoss);
        clientValRange.addEventListener('input', calculateLoss);
        speedRange.addEventListener('input', calculateLoss);
        revRange.addEventListener('input', calculateLoss);
        
        // Initial call
        calculateLoss();
    }

    // 3. Contact Form Submission (Web3Forms AJAX API)
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Transmission en cours...";
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                if (response.status === 200) {
                    contactForm.reset();
                    window.location.href = 'merci.html';
                } else {
                    alert("Une erreur s'est produite lors de l'envoi de votre demande. Veuillez nous contacter directement à contact@vintagedigital.fr.");
                }
            })
            .catch(() => {
                alert("Erreur réseau. Impossible d'envoyer votre demande de diagnostic. Veuillez réessayer ou nous écrire à contact@vintagedigital.fr.");
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 6000);
            });
        });
    }

    // 4. FAQ Accordion Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            
            // Close other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
                }
            });
            
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0px';
            }
        });
    });

    // 5. Testimonials Carousel
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentSlide = 0;

    function showSlide(index) {
        if (slides.length === 0) return;
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach((slide, i) => {
            if (i === currentSlide) {
                slide.classList.add('active');
                slide.style.display = 'block';
            } else {
                slide.classList.remove('active');
                slide.style.display = 'none';
            }
        });

        dots.forEach((dot, i) => {
            if (i === currentSlide) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    if (prevBtn && nextBtn && slides.length > 0) {
        // Init first slide
        showSlide(0);

        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showSlide(i));
        });

        // Auto-slide every 8 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 8000);
    }
});

