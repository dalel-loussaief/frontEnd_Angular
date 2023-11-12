import { Genre } from "./genre.model";
import { Image } from "./image.model";

export class Vetement {
   
    idVetement! : number;
    nomVetement! : string;
    prixVetement! : number;
    dateprod! : Date ;
    genre!:Genre;
     image! : Image;
    imageStr!:string;
    images!: Image[]; 
    }