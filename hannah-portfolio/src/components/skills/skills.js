import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <div id="overallskills">
            <h2>Skills:</h2>
            <div id="skills">
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
                    <img src="assets/reacticon.png" alt="React" id="gitlink" />
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
        </div>
    )

};

export default Skills;
