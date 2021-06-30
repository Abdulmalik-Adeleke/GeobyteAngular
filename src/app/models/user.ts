export class User { 
    name: string; 
    email: string;
    role: string; 
}

export class Role {

    constructor(  
    public id: string,
    public name: string){

    }

}