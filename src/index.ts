import {GitHubApiService} from './GitHubApiService';
import {UserInfo} from './UserInfo';
import { RepoInfo } from './RepoInfo';
import * as _ from 'lodash';
var gitHubService=new GitHubApiService();
gitHubService.getRequest('snjanbu',(user:UserInfo)=>{
    gitHubService.getRepoInfo('snjanbu',(repos:RepoInfo[])=>{
        let sorted=_.sortBy(repos,[(repository:RepoInfo)=>{return repository.getDesription()}]);
        let top=_.take(sorted,5);
        user.setRepos(top);
        console.log(user);
    });
});