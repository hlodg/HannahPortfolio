import React from 'react';

const Nav = () => {
  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <img src="./Assets/Phone Photo 220" alt="could not display"></img>
        <h1 class="display-5 fw-bold">Hannah's Portfolio</h1>
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
                <a class="nav-link active" aria-current="page">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >Introduction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

};

export default Nav;
