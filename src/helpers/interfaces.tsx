import { RefObject } from 'react';
import {Project} from './classes'

export interface SiteProps {
    projects: Project[]
}

export interface RefLinksObj {
    about: RefObject<any>,
    project: RefObject<any>,
    technologies: RefObject<any>,
    contact: RefObject<any>,
}