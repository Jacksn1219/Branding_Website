import './App.css';
import { useState, useRef } from 'react';

function App() {
    const menuChaptersRef = useRef(null);
    const menuChaptersBtnRef = useRef(null);

    function toggleChaptersMenu() {
        if (menuChaptersRef.current.classList.contains('open')) {
            const items = menuChaptersRef.current.querySelectorAll('.menu-item-chapters');
            // Reverse animation delays
            items.forEach((item, index) => {
                item.style.transitionDelay = `${(items.length - index) * 0.05}s`;
            });
            menuChaptersRef.current.classList.remove('open');
            menuChaptersBtnRef.current.classList.remove('active');

            setTimeout(() => {
                items.forEach(item => {
                    item.style.transitionDelay = `0s`;
                });
            }, items.length * 50 + 400);

        } else {
            const items = menuChaptersRef.current.querySelectorAll('.menu-item-chapters');
            items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.05}s`;
            });
            menuChaptersRef.current.classList.add('open');
            menuChaptersBtnRef.current.classList.add('active');
        }
    }

    const menuSocialsRef = useRef(null);
    const menuSocialsBtnRef = useRef(null);

    function toggleSocialsMenu() {
        if (menuSocialsRef.current.classList.contains('open')) {
            const items = menuSocialsRef.current.querySelectorAll('.menu-item-socials');
            // Reverse animation delays
            items.forEach((item, index) => {
                item.style.transitionDelay = `${(items.length - index) * 0.05}s`;
            });
            menuSocialsRef.current.classList.remove('open');
            menuSocialsBtnRef.current.classList.remove('active');

            setTimeout(() => {
                items.forEach(item => {
                    item.style.transitionDelay = `0s`;
                });
            }, items.length * 50 + 400);

        } else {
            const items = menuSocialsRef.current.querySelectorAll('.menu-item-socials');
            items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.05}s`;
            });
            menuSocialsRef.current.classList.add('open');
            menuSocialsBtnRef.current.classList.add('active');
        }
    }

    return (
        <div>
            <section className="layout">
                <div className="header">
                    <button className="menu-btn-chapters" id="menuChaptersBtn" ref={menuChaptersBtnRef} onClick={toggleChaptersMenu}>Menu |</button>
                    <div id="sideChaptersMenu" className="side-menu-chapters" ref={menuChaptersRef}>
                        <div className="menu-item-chapters">About</div>
                        <div className="menu-item-chapters">Projects</div>
                        <div className="menu-item-chapters">Socials</div>
                    </div>

                    <button className="menu-btn-socials" id="menuSocialsBtn" ref={menuSocialsBtnRef} onClick={toggleSocialsMenu}>| Socials</button>
                    <div id="sideSocialsMenu" className="side-menu-socials" ref={menuSocialsRef}>
                        <div className="menu-item-socials">
                            <div style={{ bottom: '20px', right: '20px' }}>
                                <a 
                                    href="https://github.com/Jacksn1219" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                > 
                                    <img 
                                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                                        alt="LinkedIn Logo"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="menu-item-socials">
                            <div style={{ bottom: '40px', right: '20px' }}>
                                <a 
                                    href="https://www.linkedin.com/in/chris-van-der-elst-181207327/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                                        alt="GitHub Logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="logo-container">
                        <img 
                            src=".\img\Naam_Logo.png"
                            alt="Naam Logo"
                            style={{
                                textDecoration: 'none'
                            }}
                        />
                    </div>
                </div>
                <div className="main">
                    
                </div>
                <div className="footer"></div>
            </section>
        </div>
    );
}

export default App;
