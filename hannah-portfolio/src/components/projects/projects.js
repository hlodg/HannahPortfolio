import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div>
        <section id="portfolio">
            <div class="left-content" id="#projects">
                <h2>Portfolio</h2>
            </div>
            <div class="right-content">
                <div class="first left project">
                    <h3><a href="https://hlodg.github.io/Code-Quiz/scores.html">Code Quiz</a></h3>
                    <a href= "https://github.com/hlodg/Code-Quiz">See Code Here</a>
                    <section class="project_content">
                        <p>This code quiz website enables users to test thier basic knowledge of javascript. By using this information, the user can understand what they need to keep working on.</p>
                        <img src="assets/Code Quiz.gif" alt="https://unsplash.com/s/photos/coming-soon" />
                    </section>
                </div>
                <div class="right project">
                    <h3><a href="https://stumartin22.github.io/genre-finder/">Genre Finder</a></h3>
                    <a href= "https://stumartin22.github.io/genre-finder/">See Code Here</a>
                    <section class="project_content">
                        <p>Have you ever been frustrated, not knowing what to listen too? Then the genre finder is for you! The genre finder is an application that enables users to find different albums and artists of a specific genre.</p>
                        <img src="assets/Genre Finder Search Page.gif" alt="https://unsplash.com/s/photos/coming-soon" />
                    </section>
                </div>
                <div class="left project">
                    <h3><a href="https://morning-bastion-43801.herokuapp.com/">Golf Tracker</a></h3>
                    <a href="https://github.com/RedBread97/golf_tracker">See Code Here</a>
                    <section class="project_content">
                        <p>It is important to keep improving your golf game! Therefore, this golf tracker records your scores each game and provides information to help you understand how you are progressing. </p>
                        <img src="assets/golf.jpeg" alt="https://unsplash.com/s/photos/coming-soon" />
                    </section>
                </div>

                <div class="right project">
                    <h3><a href="https://radiant-mountain-18459.herokuapp.com/">Podcasts for Kids</a></h3>
                    <a href = "https://github.com/fchang1720/Podcast-Website">See Code Here</a>
                    <section class="project_content">
                        <p>Have your kids ever wanted to create a podcast to share with friends. Well then this is the app for you!</p>
                       <img src="assets/pfk.png" alt="https://unsplash.com/s/photos/coming-soon" />
                    </section>
                </div>


            </div>
        </section>
    </div>
  )

};

export default Projects;
