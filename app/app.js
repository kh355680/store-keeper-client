(function() {
  "use strict";

  angular
    .module("app", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'app/home/home.html'
        })
        $stateProvider.state('categoryList',{
            url:'/category-list',
            templateUrl:'app/category/category-list.html'
        });
        $urlRouterProvider.when('','/home');
    })
    .run(function() {
      console.log("loaded");
    });
})();
