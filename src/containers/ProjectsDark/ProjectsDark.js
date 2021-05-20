import React from 'react';
import NavbarDark from '../../components/NavbarDark';
import FooterDark from '../../components/FooterDark';
import HeaderDark from '../../components/HeaderDark';
import Projects from '../../components/Projects';

import {main, container, title, items} from './ProjectsDark.module.scss';

import RecipeFinder from '../../assets/RecipeFinder.png';
import MyPlants from '../../assets/MyPlants.png';
import Yahtzee from '../../assets/Yahtzee.png';
import StarWars from '../../assets/StarWars.png';
import MyPage from '../../assets/MyPage.png';

const recipeFinderDescription = 'Fully responsive application which uses TheMealDB API. The idea of this app is to draw a recipe when you have no idea what to cook. It shows random recipes, after choosing one, user can see the ingredients and preparation method. It also suggests other meals from the same category.';
const recipeFinderTechnologies = 'Affinity Designer, CSS, ESLint, Figma, HTML, Postman, TheMealDB API, Vue.js';
const recipeFinderCode = 'https://github.com/brzeczkowskaw/DTT-test';
const recipeFinderDemo = 'https://brzeczkowskaw.github.io/DTT-test/#/';

const myPlantsDescription = 'Fully responsive application for plant lovers. It allows to search a database of plants as well as adding plants to it. Logged user can create his own collection of plants, add events to calendar and talk to other users.';
const myPlantsTechnologies = 'Affinity Designer, ESLint, Express.js, Figma, Heroku, HTML5, Jest, Jira, MongoDB, Mongoose, Node.js, ReactJS, Scrum, SCSS, TypeScript';
const myPlantsCode = 'https://github.com/LittleCodersCrew/CodersCamp2020.Project.React.MyPlants';
const myPlantsDemo = 'https://littlecoderscrew.github.io/CodersCamp2020.Project.React.MyPlants/#/login';

const yahtzeeDescription = 'Fully responsive application to play dice game Yahtzee. User can play with maximum three friends or againist computer. There are three difficulty modes. During the game user can see some hints. There are also three themes to choose. Scores are localy stored.';
const yahtzeeTechnologies = 'Affinity Designer, BEM, ESLint, Figma, HTML5, Jest, Jira, SCSS, Scrum, StyleLint, TypeScript, Webpack';
const yahtzeeCode = 'https://github.com/ruljin/CodersCamp2020.Project.TypeScript.YahtzeeGame';
const yahtzeeDemo = 'https://ruljin.github.io/CodersCamp2020.Project.TypeScript.YahtzeeGame/';

const starwarsDescription = 'Fully responsive application with quiz that tests the knowledge of the Star Wars universe. User can play againist a computer or test knowledge in solo mode. Every question has time counter. Application is using Start Wars API to create questions. Scores are stored locally. ';
const starwarsTechnologies = 'BEM, Figma, HTML5, JavaScript, Jest, SCSS, Scrum, Star Wars API, Webpack';
const starwarsCode = 'https://github.com/ruljin/CodersCamp2020.Project.JavaScript.StarWarsQuiz';
const starwarsDemo = 'https://ruljin.github.io/CodersCamp2020.Project.JavaScript.StarWarsQuiz/';

const mypageDescription = 'Fully responsive one pager created to present myself. It is about my trips and shows a gallery of pictures I made during travelling. It was my first programming project. ';
const mypageTechnologies = 'Affinity Designer, CSS. HTML5';
const mypageCode = 'https://github.com/brzeczkowskaw/CodersCamp2020.Project.HTML-CSS.BusinessCard';
const mypageDemo = 'https://brzeczkowskaw.github.io/CodersCamp2020.Project.HTML-CSS.BusinessCard/';

const headerText = 'Projects';

const ProjectsDark = () => {
    return (
        <div className={main}>
            <NavbarDark />
            <div className={container}>
                <div className={title}>
                    <HeaderDark text={headerText} fontSize='50px' />
                </div>
                <div className={items}>
                    <Projects image={RecipeFinder} title='Recipe Finder' description={recipeFinderDescription} technologies={recipeFinderTechnologies} code={recipeFinderCode} demo={recipeFinderDemo} />
                    <Projects image={MyPlants} title='My Plants' description={myPlantsDescription} technologies={myPlantsTechnologies} code={myPlantsCode} demo={myPlantsDemo} />
                    <Projects image={Yahtzee} title='Yahtzee' description={yahtzeeDescription} technologies={yahtzeeTechnologies} code={yahtzeeCode} demo={yahtzeeDemo} />
                    <Projects image={StarWars} title='Star Wars quiz' description={starwarsDescription} technologies={starwarsTechnologies} code={starwarsCode} demo={starwarsDemo} />
                    <Projects image={MyPage} title='Personal one-pager' description={mypageDescription} technologies={mypageTechnologies} code={mypageCode} demo={mypageDemo} />
                </div>
            </div>
            <FooterDark />
        </div>
    )
}

export default ProjectsDark
