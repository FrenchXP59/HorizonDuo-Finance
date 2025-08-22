// Gestion du thème sombre/clair
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    // Initialiser le thème (dark par défaut)
    updateThemeIcon();

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        updateThemeIcon();
        
        // Sauvegarder la préférence
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });

    function updateThemeIcon() {
        if (body.classList.contains('dark')) {
            themeIcon.textContent = '🌙';
        } else {
            themeIcon.textContent = '☀️';
        }
    }

    // Charger la préférence sauvegardée
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon();
    }
});

// Navigation vers les outils
function navigateToTool(url) {
    window.location.href = url;
}

// Animations au scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Utilitaires pour les calculatrices
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatPercentage(value) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }).format(value / 100);
}

// Fonction pour calculer les intérêts composés
function calculateCompoundInterest(principal, rate, years, monthlyContribution = 0) {
    const yearlyData = [];
    let currentAmount = principal;
    
    for (let year = 0; year <= years; year++) {
        if (year > 0) {
            // Ajouter les contributions mensuelles
            currentAmount += monthlyContribution * 12;
            // Appliquer les intérêts
            currentAmount *= (1 + rate / 100);
        }
        
        yearlyData.push({
            year: year,
            amount: currentAmount,
            contributions: principal + (monthlyContribution * 12 * year),
            interest: currentAmount - principal - (monthlyContribution * 12 * year)
        });
    }
    
    return yearlyData;
}

// Fonction pour calculer les dividendes
function calculateDividends(principal, dividendYield, growthRate, years, reinvest = false) {
    const yearlyData = [];
    let shares = principal / 100; // Prix arbitraire de 100€ par action
    let totalDividends = 0;
    let currentDividendPerShare = (dividendYield / 100) * 100;
    
    for (let year = 1; year <= years; year++) {
        const dividendReceived = shares * currentDividendPerShare;
        totalDividends += dividendReceived;
        
        if (reinvest) {
            // Réinvestir les dividendes
            const newShares = dividendReceived / 100;
            shares += newShares;
        }
        
        // Croissance du dividende
        currentDividendPerShare *= (1 + growthRate / 100);
        
        yearlyData.push({
            year: year,
            shares: shares,
            dividendPerShare: currentDividendPerShare,
            dividendReceived: dividendReceived,
            totalDividends: totalDividends,
            portfolioValue: shares * 100
        });
    }
    
    return yearlyData;
}
