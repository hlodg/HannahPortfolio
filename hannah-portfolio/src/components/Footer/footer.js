import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div id= "footer">
                <h2>Contact Me</h2>
                <p>hannahlodge00@gmail.com</p>
                <p>612.242.0166</p>
            </div>
            <section id="footer">
                <div class="right-content">
                    <a href="https://github.com/hlodg">
                    <img src="assets/mark.png" alt="Github Link Above" id="gitlink" />
                    </a>
                </div>
                <div class="left-content">
                    <a href="https://www.linkedin.com/in/hannah-lodge-79a948a8/">
                        <img src="assets/Linkedin-logo-png.png" id="gitlink" />
                    </a>
                </div>
                <div class="left-content">
                    <a href="hannahlodge00@gmail.com">
                        <img src="assets/Gmail-logo.png" id="gitlink" />
                    </a>
                </div>
            </section>
        </div>
    )

};

export default Footer;
