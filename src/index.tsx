import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Site from './components/Site';
import {Project} from './helpers/classes';
import php from './technologyIcons/php.svg';
import js from './technologyIcons/javascript.svg';
import css from './technologyIcons/css.svg';
import html from './technologyIcons/html.svg';
import java from './technologyIcons/java.svg';
import kotlin from './technologyIcons/kotlin.svg'
import data from './data.json';
import vulp1 from "./projectGraphics/Vulpes/Vulp-1.png";
import vulp2 from "./projectGraphics/Vulpes/Vulp-2.png";
import vulp3 from "./projectGraphics/Vulpes/Vulp-3.png";
import dab1 from "./projectGraphics/DotsAndBoxes/DAB-1.jpg";
import dab2 from "./projectGraphics/DotsAndBoxes/DAB-2.jpg";
import dab3 from "./projectGraphics/DotsAndBoxes/DAB-3.jpg";
import war1 from "./projectGraphics/WarGame/WAR-1.png";
import war2 from "./projectGraphics/WarGame/WAR-2.png";
import war3 from "./projectGraphics/WarGame/WAR-3.png";
import war4 from "./projectGraphics/WarGame/WAR-4.png";


const projects: Project[] = [];
projects.push(new Project(data.projects[1].title, [dab1, dab2, dab3], data.projects[1].description, [kotlin], data.projects[1].git))
projects.push(new Project(data.projects[0].title, [vulp1, vulp2, vulp3], data.projects[0].description, [php, js, css, html], data.projects[0].git))
projects.push(new Project(data.projects[2].title, [war1, war2, war3, war4], data.projects[2].description, [java], data.projects[2].git))


ReactDOM.render(
  <React.StrictMode>
    <Site projects={projects} contact={data.contact} about={data.about} techDesc={data.skills} welcome={data.welcome} />
  </React.StrictMode>,
  document.getElementById('root')
);