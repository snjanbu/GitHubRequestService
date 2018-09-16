"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RepoInfo = /** @class */ (function () {
    function RepoInfo(response) {
        this.name = response.name;
        this.description = response.description;
    }
    RepoInfo.prototype.getDesription = function () {
        return this.description;
    };
    return RepoInfo;
}());
exports.RepoInfo = RepoInfo;
