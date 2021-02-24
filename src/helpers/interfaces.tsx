import { RefObject } from 'react';
import {Project} from './classes'

export interface SiteProps {
    projects: Project[],
    techDesc: string[],
    about: string[],
    welcome: string[],
    contact: contactObject;
}

interface contactObject {
    git: string,
    linkedin: string,
    text: string[]
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

interface DefaultProps {
    refLink?: RefObject<any>,
}

export interface PropsWithText extends DefaultProps {
    text: string[]
}

export interface feedback {
    templateId: string,
    email: string,
    name: string,
    subject: string,
    content: string,
    user: string
}

export interface AboutProps extends PropsWithText {
    images: string[]
}

export interface TopBarProps {
    refs: RefLinksObj,
    handler: Function
}

export interface ContactProps extends DefaultProps {
    data: ContactObject
}

interface ContactObject {
    text: string[],
    git: string,
    linkedin: string
}