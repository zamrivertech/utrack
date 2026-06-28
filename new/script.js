/**
 * UTRACK E.I - JavaScript Engine
 * Focus: High-performance Language Switching & UI Animations
 */

// 1. THE TRANSLATION DICTIONARY
// This contains the professional business copy for both languages.
const translations = {
    en: {
        // Navigation
        "nav_home": "Home",
        "nav_about": "About",
        "nav_services": "Services",
        "nav_industries": "Industries",
        "nav_projects": "Projects",
        "nav_contact": "Contact",
        "cta_get_started": "Get Started",
        
        // Mega Menu
        "mega_security": "Security & Tracking",
        "mega_infrastructure": "Infrastructure",
        "mega_digital": "Digital Solutions",
        "ser_tracking": "Vehicle Tracking",
        "ser_fleet": "Fleet Management",
        "ser_cctv": "CCTV & Access Control",
        "ser_networking": "Networking & Fiber",
        "ser_servers": "Server Installation",
        "ser_support": "IT Support",
        "ser_web": "Web Development",
        "ser_cloud": "Cloud & Hosting",
        "ser_cyber": "Cybersecurity",

        // Hero Section
        "hero_badge": "Technology Partner in Mozambique",
        "hero_title": "Empowering Growth Through Innovative Tech",
        "hero_desc": "UTRACK E.I provides premium IT solutions and specialized tracking services tailored for the unique challenges of the African enterprise landscape.",
        "hero_cta_primary": "Explore Solutions",
        "hero_cta_secondary": "Our Mission",

        // Stats
        "stat_clients": "Enterprise Clients",
        "stat_years": "Years Experience",
        "stat_projects": "Projects Completed",
        "stat_support": "Technical Support",

        // Intro
        "intro_title": "Local Expertise, Global Standards",
        "intro_p1": "Based in Tete, UTRACK E.I is a locally owned technology leader dedicated to bridging the digital divide in Central and Northern Mozambique.",
        "intro_p2": "We don't just provide services; we build long-term partnerships that drive efficiency, security, and digital transformation.",
        "check_1": "Customized Enterprise Solutions",
        "check_2": "Reliable Support Infrastructure",
        "check_3": "Deep Local Market Knowledge",
        "learn_more": "Learn more about us",

        // Service Cards
        "ser_preview_title": "Our Core Capabilities",
        "ser_preview_desc": "Comprehensive technology services designed to power modern industry.",
        "card_tracking_title": "Vehicle Tracking",
        "card_tracking_desc": "Real-time GPS monitoring and recovery services for individual and commercial vehicles.",
        "card_fleet_title": "Fleet Management",
        "card_fleet_desc": "Advanced analytics, fuel monitoring, and driver behavior reports for logistics optimization.",
        "card_it_title": "Managed IT Services",
        "card_it_desc": "End-to-end server maintenance, workstation support, and network administration.",
        "view_details": "View Details",

        // Industries Section
        "ind_title": "Serving Mozambique's Key Sectors",
        "ind_desc": "We understand the specific technological demands of the industries driving our regional economy.",

        // CTA Banner
        "cta_title": "Ready to transform your technology?",
        "cta_desc": "Contact our expert team in Tete for a customized consultation.",
        "cta_btn": "Talk to an Expert",

        // Footer
        "footer_about": "Professional technology solutions based in Tete, Mozambique. Improving security and connectivity across the nation.",
        "footer_quick": "Quick Links",
        "footer_services": "Services",
        "footer_contact_h": "Contact Us",
        "nav_privacy": "Privacy Policy",
        "nav_terms": "Terms of Service"
    },
    pt: {
        // Navegação
        "nav_home": "Início",
        "nav_about": "Sobre Nós",
        "nav_services": "Serviços",
        "nav_industries": "Indústrias",
        "nav_projects": "Projectos",
        "nav_contact": "Contacto",
        "cta_get_started": "Começar",

        // Mega Menu
        "mega_security": "Segurança e Rastreio",
        "mega_infrastructure": "Infraestrutura",
        "mega_digital": "Soluções Digitais",
        "ser_tracking": "Rastreio de Veículos",
        "ser_fleet": "Gestão de Frotas",
        "ser_cctv": "CCTV e Controlo de Acesso",
        "ser_networking": "Redes e Fibra",
        "ser_servers": "Instalação de Servidores",
        "ser_support": "Suporte de TI",
        "ser_web": "Desenvolvimento Web",
        "ser_cloud": "Nuvem e Hosting",
        "ser_cyber": "Cibersegurança",

        // Hero Section
        "hero_badge": "Parceiro Tecnológico em Moçambique",
        "hero_title": "Impulsionando o Crescimento com Tecnologia",
        "hero_desc": "A UTRACK E.I fornece soluções de TI premium e serviços de rastreio especializados, adaptados aos desafios únicos do cenário empresarial africano.",
        "hero_cta_primary": "Explorar Soluções",
        "hero_cta_secondary": "Nossa Missão",

        // Stats
        "stat_clients": "Clientes Corporativos",
        "stat_years": "Anos de Experiência",
        "stat_projects": "Projectos Concluídos",
        "stat_support": "Suporte Técnico",

        // Intro
        "intro_title": "Experiência Local, Padrões Globais",
        "intro_p1": "Sediada em Tete, a UTRACK E.I é uma líder tecnológica de capital local, dedicada a reduzir a exclusão digital no Centro e Norte de Moçambique.",
        "intro_p2": "Não fornecemos apenas serviços; construímos parcerias de longo prazo que impulsionam a eficiência, segurança e transformação digital.",
        "check_1": "Soluções Corporativas Personalizadas",
        "check_2": "Infraestrutura de Suporte Confiável",
        "check_3": "Profundo Conhecimento do Mercado Local",
        "learn_more": "Saiba mais sobre nós",

        // Service Cards
        "ser_preview_title": "Nossas Competências",
        "ser_preview_desc": "Serviços tecnológicos abrangentes concebidos para potenciar a indústria moderna.",
        "card_tracking_title": "Rastreio de Veículos",
        "card_tracking_desc": "Monitoria GPS em tempo real e serviços de recuperação para veículos particulares e comerciais.",
        "card_fleet_title": "Gestão de Frotas",
        "card_fleet_desc": "Análise avançada, controlo de combustível e relatórios de comportamento para logística.",
        "card_it_title": "Serviços de TI Geridos",
        "card_it_desc": "Manutenção de servidores de ponta a ponta, suporte a estações de trabalho e administração de redes.",
        "view_details": "Ver Detalhes",

        // Industries Section
        "ind_title": "Atendendo aos Sectores Chave de Moçambique",
        "ind_desc": "Compreendemos as exigências tecnológicas específicas das indústrias que movem a nossa economia regional.",

        // CTA Banner
        "cta_title": "Pronto para transformar a sua tecnologia?",
        "cta_desc": "Contacte a nossa equipa de especialistas em Tete para uma consultoria personalizada.",
        "cta_btn": "Falar com Especialista",

        // Footer
        "footer_about": "Soluções tecnológicas profissionais baseadas em Tete, Moçambique. Melhorando a segurança e conectividade em todo o país.",
        "footer_quick": "Links Rápidos",
        "footer_services": "Serviços",
        "footer_contact_h": "Contacte-nos",
        "nav_privacy": "Política de Privacidade",
        "nav_terms": "Termos de Serviço"
    }
};

// 2. LANGUAGE SWITCHER CORE LOGIC
const languageSwitcher = {
    init() {
        this.langEnBtn = document.getElementById('lang-en');
        this.langPtBtn = document.getElementById('lang-pt');
        
        // Listen for clicks
        this.langEnBtn.addEventListener('click', () => this.changeLanguage('en'));
        this.langPtBtn.addEventListener('click', () => this.changeLanguage('pt'));

        // Load saved preference or default to English
        const savedLang = localStorage.getItem('utrack_lang') || 'en';
        this.changeLanguage(savedLang);
    },

    changeLanguage(lang) {
        // Save choice
        localStorage.setItem('utrack_lang', lang);
        document.documentElement.lang = lang;

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // If it's an input/textarea with a placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Toggle Button Classes
        if (lang === 'en') {
            this.langEnBtn.classList.add('active');
            this.langPtBtn.classList.remove('active');
        } else {
            this.langPtBtn.classList.add('active');
            this.langEnBtn.classList.remove('active');
        }
    }
};

// 3. UI ANIMATIONS (STUNT COUNTER, STICKY NAV)
const uiEngine = {
    init() {
        this.handleScroll();
        this.handleStats();
        this.updateYear();
        
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    },

    handleScroll() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Reveal animations on scroll
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    },

    handleStats() {
        const statsSection = document.querySelector('.stats-bar');
        const counters = document.querySelectorAll('.stat-number');
        let started = false;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const speed = 2000 / target;
                    const updateCount = () => {
                        const count = +counter.innerText;
                        if (count < target) {
                            counter.innerText = Math.ceil(count + (target / 100));
                            setTimeout(updateCount, speed);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
                started = true;
            }
        }, { threshold: 0.5 });

        if (statsSection) observer.observe(statsSection);
    },

    updateYear() {
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    languageSwitcher.init();
    uiEngine.init();
});