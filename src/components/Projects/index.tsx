import "./style.css";
import ProjectCard from "./ProjectCard";
import {useInView} from "react-intersection-observer";
import {ProjectProps} from "../../helpers/interfaces";



const Projects = ({refLink, projects}: ProjectProps) => {
    const { ref, inView } = useInView({
        threshold: [0.5],
    })

    

    return (
        <div className="main-component" ref={ref}>
            <h1 className="segment-title">Projects</h1>
            <div className="projects first-panel" ref={refLink} style={{opacity: inView?1:0.1, transition: '1s', paddingBlockStart: '15vh'}}>
                {projects.map(project => {
                    return (
                            <div className="small-project">
                                <ProjectCard imgs={project.photos} techs={project.techs} description={project.description} name={project.title} />
                            </div>    
                        )
                })}
            </div>
        </div>
    )
}

export default Projects;