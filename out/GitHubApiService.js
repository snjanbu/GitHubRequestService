"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var UserInfo_1 = require("./UserInfo");
var RepoInfo_1 = require("./RepoInfo");
var OPTIONS = {
    'headers': {
        'User-Agent': 'request'
    },
    json: true
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getRequest = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, body, response) {
            var userInfo = new UserInfo_1.UserInfo(body);
            cb(userInfo);
        });
    };
    GitHubApiService.prototype.getRepoInfo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, body, response) {
            var repoInfo = body.body;
            var repoArray = repoInfo.map(function (value) { return new RepoInfo_1.RepoInfo(value); });
            cb(repoArray);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
