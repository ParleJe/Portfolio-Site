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

export interface ProjectProps {
    refLink: RefObject<any>,
    projects: Project[]
}

export interface PhotoDisplayProps {
    images: Array<any>,
    round?: boolean,
    transitionTime: number|null
}

export interface LogoProps {
    rotate: boolean,
    animate: boolean,
  }

export interface DefaultProps {
    refLink: RefObject<any>
}

export interface feedback {
    templateId: string,
    email: string,
    name: string,
    subject: string,
    text: string,
    user: string,
}

export interface AboutProps {
    refLink: RefObject<any>,
    images: string[]
}

export interface TopBarProps {
    refs: RefLinksObj,
    handler: Function
}