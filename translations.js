// Translations for the website
const translations = {
    'en': {
        'gear': 'Gear',
        'blog': 'Blog',
        'about': 'About',
        'name': 'Ozan Yücedag',
        'description': 'I\'m an information processor and currently studying Software development.\nI\'m also an IHK certified Data protection specialist.',
        'email': 'Email me',
        'language': 'Language',
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
        'timeline_2024_desc': 'Studying Software Development in Darmstadt, Germany',
        'timeline_2023': 'May 2023',
        'timeline_2023_desc': 'Became IHK certified Data Protection Specialist in Germany',
        'timeline_2015': 'July 2015',
        'timeline_2015_desc': 'Finished school education in Information Processing with Database and HTML content in Germany'
    },
    'de': {
        'gear': 'Ausrüstung',
        'blog': 'Blog',
        'about': 'Über mich',
        'name': 'Ozan Yücedag',
        'description': 'Ich bin Informationsverarbeiter und studiere derzeit Softwareentwicklung.\nIch bin außerdem IHK zertifizierter Datenschutzspezialist.',
        'email': 'E-Mail senden',
        'language': 'Sprache',
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
        'timeline_2024_desc': 'Studium der Softwareentwicklung in Darmstadt, Deutschland',
        'timeline_2023': 'Mai 2023',
        'timeline_2023_desc': 'IHK zertifizierter Datenschutzspezialist in Deutschland geworden',
        'timeline_2015': 'Juli 2015',
        'timeline_2015_desc': 'Schulausbildung in Informationsverarbeitung mit Datenbank und HTML-Inhalten in Deutschland abgeschlossen'
    },
    'tr': {
        'gear': 'Ekipman',
        'blog': 'Blog',
        'about': 'Hakkımda',
        'name': 'Ozan Yücedag',
        'description': 'Bilgi işlemcisiyim ve şu anda Yazılım geliştirme okuyorum.\nAyrıca IHK sertifikalı Veri koruma uzmanıyım.',
        'email': 'E-posta gönder',
        'language': 'Dil',
        'about_title': 'Hakkımda',
        'about_info': 'Hakkımda bazı bilgiler.',
        'gear_title': 'Ekipman',
        'gear_info': 'Kullandığım ekipman.',
        'macbook': 'MacBook Pro',
        'airpods': 'Apple Airpods',
        'blog_post_title': 'Website Başlangıcı',
        'blog_post_date': '19 Aralık 2024',
        'blog_post_content': 'Kişisel web siteme hoş geldiniz! Bu sayfa çalışmalarımı sergilemek ve yazılım geliştirmedeki yolculuğumu paylaşmak için oluşturuldu. Site hakkımda bilgiler, ekipmanlarım ve projelerim ve deneyimlerim hakkında gelecekteki blog yazıları içerecek.',
        'timeline_2024': 'Mayıs 2024 - Şimdi',
        'timeline_2024_desc': 'Darmstadt, Almanya\'da Yazılım Geliştirme okuyor',
        'timeline_2023': 'Mayıs 2023',
        'timeline_2023_desc': 'Almanya\'da IHK sertifikalı Veri Koruma Uzmanı oldu',
        'timeline_2015': 'Temmuz 2015',
        'timeline_2015_desc': 'Almanya\'da Veritabanı ve HTML içeriği ile Bilgi İşleme okul eğitimini tamamladı'
    }
};

// Current language
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    updateLanguageDropdown();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Function to update language dropdown
function updateLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

// Function to toggle dropdown
function toggleDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to update content based on selected language
function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
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