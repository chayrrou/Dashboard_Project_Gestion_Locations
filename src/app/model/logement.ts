import { Habitant } from "./habitant";
import { Proprietaire } from "./proprietaire";

export class Logement {
    constructor(
                public id:number, 
                public adresse:string,
                public description:string,
                public prix:number,
                public habitant : Habitant,
                public proprietaire : Proprietaire

        ){}
}
