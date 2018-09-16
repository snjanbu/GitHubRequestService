"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var _ = __importStar(require("lodash"));
var gitHubService = new GitHubApiService_1.GitHubApiService();
gitHubService.getRequest('snjanbu', function (user) {
    gitHubService.getRepoInfo('snjanbu', function (repos) {
        var sorted = _.sortBy(repos, [function (repository) { return repository.getDesription(); }]);
        var top = _.take(sorted, 5);
        user.setRepos(top);
        console.log(user);
    });
});
