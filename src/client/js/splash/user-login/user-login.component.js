(function() {
  'use strict';
  angular
    .module('app')
    .component('userLogin', {
      controller: controller,
      templateUrl: 'js/splash/user-login/user-login.template.html'
    });
console.log("Getting to user-login component.");
    controller.$inject = ['$http', '$state'];

    ////////////////////////////
    /////// CONTROLLER
    ////////////////////////////
    function controller($http, $state) {
      const vm = this;


      ////////////////////////////
      /////// SUBMIT USERNAME
      ////////////////////////////
      vm.submitUsername = function(username) {
        // send a post to the users table
        // format the username like an object (using es6) so it will be stringified
        $http.post('/users', {username})
          .then(function (response) {
            localStorage.username = username;
            localStorage.user_id = response.data.id;
            $state.go('main');
          });
      };

    }
}());
