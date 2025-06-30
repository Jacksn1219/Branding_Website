import './styles/modern.css';
import { useEffect, useState } from 'react';

function App() {
    const [currentProject, setCurrentProject] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
    };

    // Project data
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "Een moderne persoonlijke website gebouwd met React en Vite, met een focus op branding en digitale identiteit. De website bevat geavanceerde CSS animaties, een responsive design en een donker thema met blue-orange kleurenschema. Alle elementen zijn geoptimaliseerd voor performance en gebruikservaring.",
            technologies: ["React", "JavaScript", "CSS3", "Vite", "HTML5", "Responsive Design"],
            image: "🌐",
            links: [
                { label: "Live Demo", url: "#" },
                { label: "GitHub", url: "https://github.com/Jacksn1219" }
            ]
        },
        {
            id: 2,
            title: "Branding Tool",
            description: "Een innovatieve webapplicatie die huisstijl generaties automatiseert voor kleine bedrijven en freelancers. De tool bevat een drag-and-drop interface, real-time preview functionaliteiten en export opties naar verschillende formaten. Ontwikkeld met moderne web technologieën en een focus op gebruiksvriendelijkheid.",
            technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Canvas API"],
            image: "🎨",
            links: [
                { label: "Demo", url: "#" },
                { label: "Meer Info", url: "#" }
            ]
        },
        {
            id: 3,
            title: "Social Integrator",
            description: "Een krachtige tool voor het naadloos koppelen van bedrijfswebsites aan hun social media kanalen via verschillende API's. Ondersteunt automatische posting, analytics dashboard en real-time synchronisatie tussen platforms. Perfect voor bedrijven die hun online aanwezigheid willen stroomlijnen.",
            technologies: ["JavaScript", "Node.js", "REST APIs", "OAuth", "React", "Chart.js"],
            image: "📱",
            links: [
                { label: "Bekijk Project", url: "#" }
            ]
        },
        {
            id: 4,
            title: "E-commerce Platform",
            description: "Een volledig functioneel e-commerce platform met winkelwagen functionaliteit, betalingsintegratie en admin dashboard. Gebouwd met modern tech stack en focus op security en performance. Inclusief inventaris beheer, order tracking en customer support systeem.",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "JWT", "Docker"],
            image: "🛒",
            links: [
                { label: "Live Demo", url: "#" },
                { label: "GitHub", url: "#" }
            ]
        },
        {
            id: 5,
            title: "Task Management App",
            description: "Een collaboratieve task management applicatie met real-time updates, team functionaliteiten en geavanceerde project tracking. Ondersteunt drag-and-drop kanban boards, time tracking en gedetailleerde rapportages. Ideaal voor teams die hun productiviteit willen verhogen.",
            technologies: ["React", "Firebase", "Material-UI", "Socket.io", "PWA", "TypeScript"],
            image: "📋",
            links: [
                { label: "Try It Out", url: "#" },
                { label: "Documentation", url: "#" }
            ]
        }
    ];

    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            const isDark = savedTheme === 'dark';
            setIsDarkMode(isDark);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            // Default to dark theme
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    // Save theme to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        // Intersection Observer voor scroll animaties
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        // Observeer alle elementen die geanimeerd moeten worden
        const elementsToObserve = document.querySelectorAll(
            '.hero, .section, .card, .skill-category, .about-image-container, .about-text, .project-content'
        );

        console.log('Elements to observe:', elementsToObserve.length); // Debug log

        elementsToObserve.forEach(el => {
            observer.observe(el);
            console.log('Observing:', el.className); // Debug log
        });

        // Cleanup
        return () => {
            elementsToObserve.forEach(el => observer.unobserve(el));
        };
    }, []);

    // Auto-rotation voor project carrousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject(prev => (prev + 1) % projects.length);
        }, 30000); // 30 seconden

        return () => clearInterval(interval);
    }, [projects.length]);

    // Mouse tracking for custom cursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const nextProject = () => {
        setCurrentProject(prev => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject(prev => (prev - 1 + projects.length) % projects.length);
    };

    const goToProject = (index) => {
        setCurrentProject(index);
    };

    return (
        <div className="App">
            {/* Theme Toggle Button */}
            <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Custom Cursor - Temporarily disabled */}
            {/*
            <div 
                className="cursor" 
                style={{ 
                    left: mousePosition.x - 10, 
                    top: mousePosition.y - 10 
                }}
            />
            <div 
                className="cursor-follower" 
                style={{ 
                    left: mousePosition.x - 20, 
                    top: mousePosition.y - 20 
                }}
            />
            */}

            {/* Floating Particles */}
            <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>

            <header>
                <nav>
                    <a href="#" data-tooltip="Home">🏠</a>
                    <a href="#about" data-tooltip="Over Mij">👤</a>
                    <a href="#skills" data-tooltip="Vaardigheden">🛠️</a>
                    <a href="#projects" data-tooltip="Projecten">💻</a>
                    <a href="#experience" data-tooltip="Ervaring">📋</a>
                    <a href="#contact" data-tooltip="Contact">📧</a>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-greeting">Hallo, ik ben</div>
                <h1>Chris van der Elst</h1>
                <div className="hero-subtitle">
                    Ik ben een gepassioneerde{' '}
                    <span style={{ color: '#ff6b35' }}>
                        Software Developer & Branding specialist
                    </span>{' '}
                    uit Nederland.
                </div>
                <p>
                    20-jarige Informatica student aan Hogeschool Rotterdam. 
                    Gepassioneerd over front-end development, branding en digitale 
                    productontwikkeling. Momenteel bezig met React-projecten en 
                    persoonlijke branding cases.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn-primary">
                        Bekijk Mijn Werk
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Neem Contact Op
                    </a>
                </div>
            </section>

            <section id="about" className="section">
                <h2>Over Mij</h2>
                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image-frame">
                            <img src="/profile_photo.JPG" alt="Chris van der Elst" className="about-image" />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                    <div className="about-text">
                        <p>
                            Ik combineer techniek en creativiteit om moderne weboplossingen 
                            te bouwen. Mijn specialisatie ligt in branding, front-end 
                            development en het ontwerpen van overzichtelijke, intuïtieve 
                            interfaces. Buiten werk ben ik actief met fotografie, muziek 
                            en mountainbiken.
                        </p>
                    </div>
                </div>
            </section>

            <section id="skills" className="section">
                <h2>Vaardigheden</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4>Front-end Development</h4>
                        <div className="skill-items">
                            <div className="skill-item">React</div>
                            <div className="skill-item">JavaScript</div>
                            <div className="skill-item">TypeScript</div>
                            <div className="skill-item">CSS/SCSS</div>
                            <div className="skill-item">HTML5</div>
                            <div className="skill-item">Vite</div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4>Branding & Design</h4>
                        <div className="skill-items">
                            <div className="skill-item">UI/UX Design</div>
                            <div className="skill-item">Figma</div>
                            <div className="skill-item">Adobe Creative Suite</div>
                            <div className="skill-item">Logo Design</div>
                            <div className="skill-item">Brand Identity</div>
                            <div className="skill-item">Fotografie</div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4>Tools & Technologies</h4>
                        <div className="skill-items">
                            <div className="skill-item">Git/GitHub</div>
                            <div className="skill-item">VS Code</div>
                            <div className="skill-item">Node.js</div>
                            <div className="skill-item">Linux</div>
                            <div className="skill-item">Docker</div>
                            <div className="skill-item">Responsive Design</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section">
                <h2>Projecten</h2>
                <p className="section-subtitle">
                    Een selectie van mijn recente werk en projecten
                </p>
                
                <div className="project-carousel">
                    <div 
                        className="project-slides-container"
                        style={{
                            transform: `translateX(-${currentProject * 20}%)`
                        }}
                    >
                        {projects.map((project, index) => (
                            <div 
                                key={project.id}
                                className="project-slide"
                            >
                                <div className="project-content">
                                    <div className="project-image">
                                        <span>{project.image}</span>
                                    </div>
                                    <div className="project-details">
                                        <h3>{project.title}</h3>
                                        <div className="project-description">
                                            {project.description}
                                        </div>
                                        
                                        <div className="project-tech">
                                            <h4>Gebruikte Technologieën:</h4>
                                            <div className="tech-stack">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-item">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="project-links">
                                            {project.links.map((link, linkIndex) => (
                                                <a 
                                                    key={linkIndex}
                                                    href={link.url}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="carousel-indicators">
                        {projects.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator ${index === currentProject ? 'active' : ''}`}
                                onClick={() => goToProject(index)}
                            />
                        ))}
                    </div>
                    
                    <button className="carousel-controls carousel-prev" onClick={prevProject}>
                        ❮
                    </button>
                    <button className="carousel-controls carousel-next" onClick={nextProject}>
                        ❯
                    </button>
                </div>
            </section>

            <section id="experience" className="section">
                <h2>Ervaring</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Magazijnmedewerker</h3>
                        <p>PePe Parts B.V. | 2023 - heden</p>
                    </div>
                    <div className="card">
                        <h3>Peercoach CMI</h3>
                        <p>Hogeschool Rotterdam | 2024</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <h2>Contact</h2>
                <p className="section-subtitle">
                    Laten we een gesprek starten over je volgende project
                </p>
                
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Naam</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Bericht</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">
                            Verstuur Bericht
                        </button>
                    </form>
                </div>
                
                <div className="cards" style={{ marginTop: '64px' }}>
                    <div className="card">
                        <h3>E-mail</h3>
                        <p>csvadeel@gmail.com</p>
                    </div>
                    <div className="card">
                        <h3>GitHub</h3>
                        <p>
                            <a 
                                href="https://github.com/Jacksn1219" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#ff6b35', textDecoration: 'none' }}
                            >
                                github.com/Jacksn1219
                            </a>
                        </p>
                    </div>
                    <div className="card">
                        <h3>LinkedIn</h3>
                        <p>
                            <a 
                                href="https://linkedin.com/in/chris-van-der-elst-181207327" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#1e90ff', textDecoration: 'none' }}
                            >
                                linkedin.com/in/chris-van-der-elst
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <footer>
                &copy; {new Date().getFullYear()} Chris van der Elst — alle rechten voorbehouden.
            </footer>
        </div>
    );
}

export default App;
