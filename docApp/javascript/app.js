var docApp = angular.module('doc', ['ngRoute', 'hljs']);

docApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/components/list', {
            templateUrl: 'views/components/modal/list/list.html',
            controller: 'RouteListCtrl'
        })
        .when('/components/nav', {
            templateUrl: 'views/components/modal/nav/nav.html',
            controller: 'RouteNavCtrl'
        })
        .when('/components/home', {
            templateUrl: 'views/home.html',
            controller: 'RouteHomeCtrl'
        })
        .otherwise({
            templateUrl: 'views/home.html'
        })
}).directive('myHolder', function () {
    return {
        link: function (scope, element, attrs) {
            attrs.$set('data-src', attrs.myHolder);
            Holder.run({images: element[0]});
        }
    };
});