import "./style.css";
import ProjectCard from "./ProjectCard";
import {useInView} from "react-intersection-observer";
import {ProjectProps} from "../../helpers/interfaces";
import { Project } from "../../helpers/classes";



const Projects = ({refLink, projects}: ProjectProps) => {
    const { ref, inView } = useInView({
        threshold: [0.5],
    })

    

    return (
        <div className="main-component" ref={ref} style={{opacity: inView?1:0.1, transition: '1s'}}>
            <h1 className="segment-title">Projects</h1>
            <div className="projects" ref={refLink} >
                {projects.map((project:Project, index:number) => {
                    return (
                            <div key={index} className="small-project">
                                <ProjectCard git={project.link} imgs={project.photos} techs={project.techs} description={project.description} name={project.title} />
                            </div>    
                        )
                })}
            </div>
        </div>
    )
}

export default Projects;