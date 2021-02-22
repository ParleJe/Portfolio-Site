import './style.css';
import img from '../About/graph-1.jpg';
import img2 from '../About/graph-2.jpg';
import ProjectCard from './ProjectCard';
import {useInView} from 'react-intersection-observer';

import php from '../TechIcons/graphics/php.svg'
import js from '../TechIcons/graphics/javascript.svg'


const Projects = () => {
    const { ref, inView } = useInView({
        threshold: [0.5,0.5],
    })

    return (
        <div className="projects" ref={ref} style={{opacity: inView?1:0.1, transition: '1s'}}>
            <h1 className="segment-title">Projects</h1>
            <div style={{width: '70%', height: '60%', minWidth: '25vw', margin: 'auto'}}>
                <ProjectCard imgs={[img, img2]} techs={[php, js]} description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut'
                name='blablabla' />
            </div>
            <div style={{width: '80%', height: '70%', minWidth: '25vw', margin: 'auto'}}>
                <ProjectCard imgs={[img, img2]} techs={[php, js]} description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut'
                name='blablabla' />
            </div>
            <div style={{width: '70%', height: '60%', minWidth: '25vw', margin: 'auto'}}>
                <ProjectCard imgs={[img, img2]} techs={[php, js]} description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut'
                name='blablabla' />
            </div>
        </div>
    )
}

export default Projects;