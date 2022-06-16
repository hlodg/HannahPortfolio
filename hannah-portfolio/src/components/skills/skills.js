import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <div id="skills">
            <h2>Skills:</h2>
            {/* <ul>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>MongoDb</li>
                <li>SQL</li>
                <li>Sequelize</li>
                <li>Heroku</li>
                <li>Rest API</li>
                <li>Google OAuth</li>
            </ul> */}
            <div>
                <img src="assets/node.jpg" alt="NodeJS" id="gitlink" />
            </div>
            <div>
                <img src="assets/javascript.webp" alt="JavaScript" id="gitlink" />
            </div>
            <div>
                <img src="assets/HTMLCSS.jpg" alt="CSS" id="gitlink" />
            </div>
            <div>
                <img src="assets/reaction.png" alt="React" id="gitlink" />
            </div>
            <div>
                <img src="assets/graphql.png" alt="GraphQL" id="gitlink" />
            </div>
            <div>
                <img src="assets/mongodb-logo.png" alt="MongoBD" id="gitlink" />
            </div>
            <div>
                <img src="assets/sequelize.png" alt="Sequelize" id="gitlink" />
            </div>
            <div>
                <img src="assets/sql.png" alt="SQL" id="gitlink" />
            </div>
        </div>
    )

};

export default Skills;
