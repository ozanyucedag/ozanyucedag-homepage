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
        'airpods': 'Apple Airpods',
        'blog_post_title': 'Website Launch',
        'blog_post_date': 'December 19, 2024',
        'blog_post_content': 'Welcome to my personal website! This page was created to showcase my work and share my journey in software development. The site features information about me, my gear, and will include future blog posts about my projects and experiences.',
        'timeline_2024': 'May 2024 - Present',
        'timeline_2024_desc': 'Studying Software Development',
        'timeline_2023': 'April 2023',
        'timeline_2023_desc': 'Became certified Data Protection Specialist',
        'timeline_2015': 'July 2015',
        'timeline_2015_desc': 'Finished school education in Information Processing with Database and HTML content'
    },
    'de': {
        'gear': 'Ausrüstung',
        'blog': 'Blog',
        'about': 'Über mich',
        'name': 'Ozan Yücedag',
        'description': 'Ich bin Informationsverarbeiter und studiere derzeit Softwareentwicklung.\nIch bin außerdem zertifizierter Datenschutzspezialist.',
        'email': 'E-Mail senden',
        'language': 'English',
        'about_title': 'Über mich',
        'about_info': 'Hier sind einige Informationen über mich.',
        'gear_title': 'Ausrüstung',
        'gear_info': 'Das ist die Ausrüstung, die ich benutze.',
        'macbook': 'MacBook Pro',
        'airpods': 'Apple Airpods',
        'blog_post_title': 'Website-Start',
        'blog_post_date': '19. Dezember 2024',
        'blog_post_content': 'Willkommen auf meiner persönlichen Website! Diese Seite wurde erstellt, um meine Arbeit zu präsentieren und meine Reise in der Softwareentwicklung zu teilen. Die Website enthält Informationen über mich, meine Ausrüstung und wird zukünftige Blog-Beiträge über meine Projekte und Erfahrungen enthalten.',
        'timeline_2024': 'Mai 2024 - Heute',
        'timeline_2024_desc': 'Studium der Softwareentwicklung',
        'timeline_2023': 'April 2023',
        'timeline_2023_desc': 'Zertifizierter Datenschutzspezialist geworden',
        'timeline_2015': 'Juli 2015',
        'timeline_2015_desc': 'Schulausbildung in Informationsverarbeitung mit Datenbank und HTML-Inhalten abgeschlossen'
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
    initializeLanguage();
});

// Also run on window load to ensure it works
window.onload = function() {
    initializeLanguage();
};

// Function to initialize language
function initializeLanguage() {
    // Check if user has a saved preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    updateContent();
}