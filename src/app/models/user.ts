export class User { 
    email: string; 
    name: string;
    role: string; 
}

export class Role {

    constructor(  
    public id: string,
    public name: string){

    }

}