import React from 'react';
import './nav.css';


const Nav = () => {
  return (
    <div id="nav">
      <div class="text-center" id="intro">
        <img src="assets/Phone Photo 222.jpg" alt="could not display" id="image" />
        <h1 class="display-5 fw-bold" id="title">Hannah's Portfolio</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">A creative, self motivated front end developer, I strive to create the best applications possible. Using my educational background, I not only have experience working with data, I find it is important to understand the user experience. Many times as a teacher, I interacted with large databases and pieces of information, but found them difficult to manage. With my new skills in Javascript, CSS, HTML, Node JS and responsive web design, I have been able to learn how to put the user experience at the forefront when creating applications. I believe both my professional skills as well as my recent coding experience has prepared me to be able to provide the best possible solutions to coding problems. </p>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#nav">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href= "#intro" >Introduction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href= "#resume">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

};

export default Nav;
