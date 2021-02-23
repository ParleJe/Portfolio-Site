import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Site from './components/Site';
import reportWebVitals from './reportWebVitals';
import {Project} from './helpers/classes';
import img1 from './projectGraphics/graph-1.jpg';
import img2 from './projectGraphics/graph-2.jpg';
import php from './technologyIcons/php.svg';
import js from './technologyIcons/javascript.svg'

const projects: Project[] = [];
projects.push(new Project("title", [img1, img2], 'description', [php, js], 'www.github.com'))
projects.push(new Project("title", [img1, img2], 'description', [php, js], 'www.github.com'))
projects.push(new Project("title", [img1, img2], 'description', [php, js], 'www.github.com'))

ReactDOM.render(
  <React.StrictMode>
    <Site projects={projects} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
