import { RepoInfo } from './RepoInfo';
import { url } from 'inspector';
export class UserInfo{
    private userName:string;
    private url:string;
    private fullName:string;
    private repoCount:number;
    private role:string;
    private repos:RepoInfo[];

    constructor(response:any){
        this.userName=response.body.login;
        this.url=response.body.url;
        this.fullName=response.body.name;
        this.repoCount=response.body.public_repos;
        this.role=response.body.bio;
        this.repos=[];
    }

    setRepos(repoArray:RepoInfo[]){
        this.repos=repoArray;
    }
}