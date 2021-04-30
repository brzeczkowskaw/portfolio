/* eslint-disable no-useless-concat */
import React from 'react';
import NavbarDark from '../../components/NavbarDark';
import FooterDark from '../../components/FooterDark';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import HeaderDark from '../../components/HeaderDark';
import TextDark from '../../components/TextDark';

import Affinity from '../../assets/Affinity.png';
import Coderscrew from '../../assets/Coderscrew.png';
import Css from '../../assets/Css.png';
import Esc from '../../assets/Esc.png';
import Express from '../../assets/Express.png';
import Figma from '../../assets/Figma.png';
import Git from '../../assets/Git.png';
import GitHub from '../../assets/GitHub.png';
import Html from '../../assets/Html.png';
import Javascript from '../../assets/Javascript.png';
import Jest from '../../assets/Jest.png';
import Jira from '../../assets/Jira.png';
import Mongo from '../../assets/Mongo.png';
import Node from '../../assets/Node.png';
import Npm from '../../assets/Npm.png';
import Reactlogo from '../../assets/Reactlogo.png';
import Scrum from '../../assets/Scrum.png';
import Typescript from '../../assets/Typescript.png';
import Uep from '../../assets/Uep.png';
import Webpack from '../../assets/Webpack.png';

import { main, container, text, mySkills, skillsIcons, myEducation, educationIcons} from './AboutDark.module.scss';

const firstLine = 'My name is Weronika';
const secondLine = 'I have graduated from Poznan University of Economics. My major was Hotel Management. After finishing University I started to work for five-star hotel located in Poznan. I was Senior Reservation Agent, and later on, PR and Marketing Specialist.';
const thirdLine = 'In 2019 I have decided to move to the Netherlands. It was my motivationto start learning to become a Front-End Developer. Despite of many hours of self-learning I attended a CodersCamp bootcamp organized by CodersCrew Association.'
const fourthLine = 'In my free time I love to travel, cook vegetarian meals, sail, go to the concert or just chill with my cat. ';
const mainText = firstLine + "\r\n" + "\r\n" + secondLine + "\r\n" + "\r\n" + thirdLine + "\r\n" + "\r\n" + fourthLine;

const codersFirstLine = 'CodersCamp';
const codersSecondLine = 'On-line web programming course.';
const codersText = codersFirstLine + "\r\n" + codersSecondLine;

const masterFirstLine = 'Poznań University of Economics';
const masterSecondLine = 'Master\'s Degree';
const mastersThirdLine = 'Tourism and Travel Services Management';
const mastersText = masterFirstLine + "\r\n" + masterSecondLine + "\r\n" + mastersThirdLine;

const escFirstLine = 'Ecole Supérieure de Commerce Troyes';
const escSecondLine = 'Luxury Tourism Management';
const escText = escFirstLine + "\r\n" + masterSecondLine + "\r\n" + escSecondLine;

const bechelorFirstLine = 'Bechelor\'s Degree';
const bechelorSecondLine = 'Hotel Management';
const bechelorText = masterFirstLine + "\r\n" + bechelorFirstLine + "\r\n" + bechelorSecondLine;


const AboutDark = () => {
    return (
        <div className={main}>
            <NavbarDark />
            <div className={container}>
                <div className={text} >
                    <TextDark text={mainText} fontsize='3vh' />
                </div>
                <div className={mySkills}>
                    <HeaderDark text='Skills' fontsize='50px' />
                    <div className={skillsIcons}>
                        <Skills text='HTML5' image={Html} />
                        <Skills text='CSS3' image={Css} />
                        <Skills text='JavaScript' image={Javascript} />
                        <Skills text='TypeScript' image={Typescript} />
                        <Skills text='React' image={Reactlogo} />
                        <Skills text='Webpack' image={Webpack} />
                        <Skills text='Jest' image={Jest} />
                        <Skills text='npm' image={Npm} />
                        <Skills text='Node.js' image={Node} />
                        <Skills text='Express' image={Express} />
                        <Skills text='MongoDB' image={Mongo} />
                        <Skills text='Git' image={Git} />
                        <Skills text='GitHub' image={GitHub} />
                        <Skills text='Scrum' image={Scrum} />
                        <Skills text='Jira' image={Jira} />
                        <Skills text='Figma' image={Figma} />
                        <Skills text='Affinity Designer' image={Affinity} />
                    </div>
                </div>
                <div className={myEducation}>
                    <HeaderDark text='Education' fontsize='50px' />
                    <div className={educationIcons}>
                        <Education text={codersText} year='2020-2021' image={Coderscrew} />
                        <Education text={mastersText} year='2011-2013' image={Uep} />
                        <Education text={escText} year='2012' image={Esc} />
                        <Education text={bechelorText} year='2008-2011' image={Uep} />
                    </div>
                </div>
            </div>
            <FooterDark />
        </div>
    )
};

export default AboutDark;