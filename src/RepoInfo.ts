export class RepoInfo{
    private name:string;
    private description:string;
    constructor(response:any){
        this.name=response.name;
        this.description=response.description;
    }

    getDesription(){
        return this.description;
    }
}