export class Kitten {

    name: string | null;
    breed:string | null;
    date:Date | null | string;
    img:string | null;

    constructor(name:string | null, breed:string | null, date:Date |string | null, img:string | null)   {
        this.name = name;
        this.breed = breed;
        this.date = date;
        this.img = img;
    }

}
