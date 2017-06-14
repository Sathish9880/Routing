/**
 * Created by sathish on 14-Jun-17.
 */
var app=angular.module('myApp',['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/add',{
            templateUrl:'partials/addstudent.html',
            controller:'addCtrl'
        })
        .when('/view',{
            templateUrl:'partials/viewstudents.html',
            controller:'viewCtrl'
        })
        .otherwise({redirectTo:'/'})
    
});