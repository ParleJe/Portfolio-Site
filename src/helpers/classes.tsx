export class Project {
    title: string;
    photos: string[];
    description: string;
    techs: string[];
    link: string;

    constructor(title:string, photos:string[], description: string, techs: string[], link: string){
        this.title = title;
        this.photos = photos;
        this.description = description;
        this.techs = techs;
        this.link = link;
    }

    returnAsObject(): Object {
        return {
            title: this.title,
            photos: this.photos,
            description: this.description,
            techs: this.techs,
            link: this.link,

        }
    }
}