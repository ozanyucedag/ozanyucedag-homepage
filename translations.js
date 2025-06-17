// Translations for the website
const translations = {
    'en': {
        'gear': 'Gear',
        'blog': 'Blog',
        'about': 'About',
        'name': 'Ozan Yücedag',
        'description': 'I\'m an information processor and currently studying Software development.\nI\'m also a certified Data protection specialist.',
        'email': 'Email me',
        'language': 'Deutsch',
        'about_title': 'About me',
        'about_info': 'Here are some Information about me.',
        'gear_title': 'Gear',
        'gear_info': 'This is the Gear I use.',
        'macbook': 'MacBook Pro',
        'airpods': 'Apple Airpods'
    },
    'de': {
        'gear': 'Ausrüstung',
        'blog': 'Blog',
        'about': 'Über mich',
        'name': 'Ozan Yücedag',
        'description': 'Ich bin Informationsverarbeiter und studiere derzeit Softwareentwicklung.\nIch bin außerdem zertifizierter Datenschutzbeauftragter.',
        'email': 'E-Mail senden',
        'language': 'English',
        'about_title': 'Über mich',
        'about_info': 'Hier sind einige Informationen über mich.',
        'gear_title': 'Ausrüstung',
        'gear_info': 'Das ist die Ausrüstung, die ich benutze.',
        'macbook': 'MacBook Pro',
        'airpods': 'Apple Airpods'
    }
};

// Current language
let currentLanguage = 'en';

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    updateContent();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Function to update content based on selected language
function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // Update language button text
    document.getElementById('language-toggle').innerHTML = translations[currentLanguage]['language'];
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has a saved preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    updateContent();
});