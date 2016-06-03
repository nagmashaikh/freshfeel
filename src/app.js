var app = angular.module("myApp", ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "../templates/login.html"
            })
            .state('signup', {
                url: "/signup",
                templateUrl: "../templates/signup.html",
                controller:"signupCtrl"
            })
            .state('home', {
                url: "/home",
                templateUrl: "../templates/home.html",
                controller:"signupCtrl"
            })
            .state('search', {
                url: "/search",
                templateUrl: "../templates/search.html",
                controller:"searchCtrl"
            })
            .state('aboutus', {
                url: "/aboutus",
                templateUrl: "../templates/aboutus.html",
                controller:"signupCtrl"
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "../templates/contactus.html",
                controller:"signupCtrl"
            });
});


