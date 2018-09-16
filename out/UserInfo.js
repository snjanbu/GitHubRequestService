"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserInfo = /** @class */ (function () {
    function UserInfo(response) {
        this.userName = response.body.login;
        this.url = response.body.url;
        this.fullName = response.body.name;
        this.repoCount = response.body.public_repos;
        this.role = response.body.bio;
        this.repos = [];
    }
    UserInfo.prototype.setRepos = function (repoArray) {
        this.repos = repoArray;
    };
    return UserInfo;
}());
exports.UserInfo = UserInfo;
