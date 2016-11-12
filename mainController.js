var app = angular.module('chartedReadsApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        }).when('/signedin', {
        templateUrl : 'pages/signedin.html',
        controller  : 'mainController'
        }).when('/app', {
        templateUrl : 'pages/app.html',
        controller  : 'mainController'
        }).otherwise({
            redirectTo:function () {
                var url = (location.href).split('?');
                if(url.length===1)
                    return '/';
                else
                    return '/signedin';
            }
        });

    // use the HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

app.controller('mainController', function($scope){

});