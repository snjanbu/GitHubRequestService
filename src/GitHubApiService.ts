import * as request from 'request';
import {UserInfo} from './UserInfo';
import { RepoInfo } from './RepoInfo';

    const OPTIONS={
        'headers':{
            'User-Agent':'request'
        },
        json:true
    }

    export class GitHubApiService{
    getRequest(userName:string,cb:(user:UserInfo)=>any){
        request.get('https://api.github.com/users/'+userName,OPTIONS,(error:any,body:any,response:any)=>{
            let userInfo=new UserInfo(body);
            cb(userInfo);
        })

    }

    getRepoInfo(userName:string,cb:(repo:RepoInfo[])=>any){
        request.get('https://api.github.com/users/'+userName+'/repos',OPTIONS,(error:any,body:any,response:any)=>{
            let repoInfo=body.body;
            let repoArray=repoInfo.map((value:RepoInfo[])=>new RepoInfo(value));
            cb(repoArray);
        })
    }

}