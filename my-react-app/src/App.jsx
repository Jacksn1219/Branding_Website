function App() {
return (
    <div className="App">
        <style>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            html {
                scroll-behavior: smooth;
            }
            body {
                font-family: 'Segoe UI', sans-serif;
                color: #1c1c1c;
                background: #f3f4f6;
            }
            header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 24px 64px;
                background: rgba(232, 232, 232, 0.85);
                box-shadow: 0 1px 4px rgba(0,0,0,0.06);
                z-index: 20;
            }
            header h1 {
                font-size: 1.5rem;
                color: #FF7F50;
            }
            nav a {
                margin-left: 32px;
                text-decoration: none;
                color: #333;
                font-weight: 600;
            }
            nav a:hover {
                color: #FF7F50;
            }
            .section {
                padding: 120px 24px 80px;
                max-width: 1100px;
                margin: 0 auto;
                background: rgba(255,255,255,0.85);
                border-radius: 16px;
                box-shadow: 0 2px 12px rgba(0,0,0,0.04);
            }
            .hero {
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 160px 64px 80px;
                background: linear-gradient(rgba(255, 255, 255, 0.15),rgba(255, 255, 255, 0.14)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
            }
            .hero h2 {
                font-size: 3.5rem;
                color: #FF7F50;
                margin-bottom: 24px;
            }
            .hero p {
                font-size: 1.25rem;
                max-width: 600px;
                line-height: 1.6;
            }
            .cards {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 32px;
                margin-top: 48px;
            }
            .card {
                background: rgba(180, 204, 218, 0.65);
                border-radius: 12px;
                padding: 32px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.06);
                transition: transform 0.25s ease;
            }
            .card:hover {
                transform: translateY(-6px);
            }
            .card h3 {
                font-size: 1.5rem;
                color: #FF7F50;
                margin-bottom: 16px;
            }
            .card p {
                font-size: 1rem;
                color: #555;
            }
            footer {
                text-align: center;
                padding: 48px 24px;
                background: rgba(197, 197, 197, 0.85);
                color: #777;
                margin-top: 64px;
                border-radius: 12px;
            }
        `}</style>

        <header>
            <h1>Chris van der Elst</h1>
            <nav>
                <a href="#about">Over Mij</a>
                <a href="#projects">Projecten</a>
                <a href="#experience">Ervaring</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>

        <section className="hero">
            <h2>Software Developer & Branding specialist</h2>
            <p>20-jarige Informatica student aan Hogeschool Rotterdam. Gepassioneerd over front-end development, branding en digitale productontwikkeling. Momenteel bezig met React-projecten en persoonlijke branding cases.</p>
        </section>

        <section id="about" className="section">
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '24px' }}>Over Mij</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', maxWidth: '700px' }}>Ik combineer techniek en creativiteit om moderne weboplossingen te bouwen. Mijn specialisatie ligt in branding, front-end development en het ontwerpen van overzichtelijke, intuïtieve interfaces. Buiten werk ben ik actief met fotografie, muziek en mountainbiken.</p>
        </section>

        <section id="projects" className="section">
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '24px' }}>Projecten</h2>
            <div className="cards">
                <div className="card">
                    <h3>Portfolio Website</h3>
                    <p>Een moderne persoonlijke website met React en een focus op branding en digitale identiteit.</p>
                </div>
                <div className="card">
                    <h3>Branding Tool</h3>
                    <p>Een webapplicatie die huisstijl generaties automatiseert voor kleine bedrijven en freelancers.</p>
                </div>
                <div className="card">
                    <h3>Social Integrator</h3>
                    <p>Tool voor het koppelen van bedrijfswebsites aan hun social kanalen via API's.</p>
                </div>
            </div>
        </section>

        <section id="experience" className="section">
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '24px' }}>Ervaring</h2>
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
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '24px' }}>Contact</h2>
            <div className="cards">
                <div className="card">
                    <h3>E-mail</h3>
                    <p>csvadeel@gmail.com</p>
                </div>
                <div className="card">
                    <h3>GitHub</h3>
                    <p><a href="https://github.com/Jacksn1219" target="_blank" rel="noopener noreferrer">github.com/Jacksn1219</a></p>
                </div>
                <div className="card">
                    <h3>LinkedIn</h3>
                    <p><a href="https://linkedin.com/in/chris-van-der-elst-181207327" target="_blank" rel="noopener noreferrer">linkedin.com/in/chris-van-der-elst</a></p>
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
