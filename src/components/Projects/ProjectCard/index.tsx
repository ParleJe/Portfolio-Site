import './style.css';
import PhotoDisplay from '../../PhotoDisplay';

interface Props {
    imgs: Array<string>,
    techs: Array<string>,
    description: string,
    name: string,
    git?: string,
    live?: string
}

const ProjectCard = ({imgs, techs, name, description}: Props) => {


    return (
        <div className='card'>
            <div className='img-card-container'>
                <PhotoDisplay images={imgs} round={false} transitionTime={8000} />
            </div>
            <div className='description-card-container'>
                <div className="card-desc">
                    <div className="card-header">
                        <h1>{name}</h1>
                        <div className="tech-outer-container">
                            <PhotoDisplay images={techs} round={true} transitionTime={3000} />
                        </div>
                        {/* <div className="link-container">
                            <button>Repo</button>
                            <button>Live</button>
                        </div> */}
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard