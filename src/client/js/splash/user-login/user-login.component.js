(function() {
  'use strict';
  angular
    .module('app')
    .component('userLogin', {
      controller: controller,
      templateUrl: 'js/splash/user-login/user-login.template.html'
    })
    function controller() {
      const vm = this;
      console.log('user log in component controller log');
    }
}());
