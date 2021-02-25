import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Site from './components/Site';
import reportWebVitals from './reportWebVitals';
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


const projects: Project[] = [];
projects.push(new Project(data.projects[1].title, [dab1, dab2, dab3], data.projects[1].description, [kotlin], data.projects[1].git))
projects.push(new Project(data.projects[0].title, [vulp1, vulp2, vulp3], data.projects[0].description, [php, js, css, html], data.projects[0].git))
projects.push(new Project(data.projects[2].title, [], data.projects[2].description, [java], data.projects[2].git))


ReactDOM.render(
  <React.StrictMode>
    <Site projects={projects} contact={data.contact} about={data.about} techDesc={data.skills} welcome={data.welcome} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
