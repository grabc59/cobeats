(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'splash',
        url: '/',
        component: 'splash',
      })
      // .state({
      //   name: 'user-login',
      //   url: '/login',
      //   component: 'userLogin',
      // })
      // .state({
      //   name: 'about',
      //   url: '/about',
      //   component: 'about',
      // })
      .state({
        name: 'main',
        url: '/main',
        component: 'main'
      });
  }

}());
