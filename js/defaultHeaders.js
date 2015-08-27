var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'cm8cy2WP3cXooB7YDzkFMkmSslV6Gi4K5b76kJBY', 'X-Parse-REST-API-Key': 'zh8oOxBtSNpOsG5lYHJSgFvlkBr3veorY1ExxvfL'};
            return config;
        }
    };
});