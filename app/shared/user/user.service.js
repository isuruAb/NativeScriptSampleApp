"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "oauth/token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            config_1.Config.token = data.Result.access_token;
        })
            .catch(this.handleErrors);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRy9CLG9DQUFtQztBQUduQyxJQUFhLFdBQVc7SUFDcEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUN2QjthQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsVUFBVTtTQUN6QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ3ZCO2FBQ0ksR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ0osZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM1QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVpQixXQUFJO0dBRHJCLFdBQVcsQ0E0Q3ZCO0FBNUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJVc2Vyc1wiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIEVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbiAgICBcbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcIm9hdXRoL3Rva2VuXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLmRvKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIENvbmZpZy50b2tlbiA9IGRhdGEuUmVzdWx0LmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIH1cblxufSJdfQ==