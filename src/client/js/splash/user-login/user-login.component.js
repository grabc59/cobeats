(function() {
  'use strict';
  angular
    .module('app')
    .component('userLogin', {
      controller: controller,
      templateUrl: 'js/splash/user-login/user-login.template.html'
    });

    controller.$inject = ['$http', '$state'];

    ////////////////////////////
    /////// CONTROLLER
    ////////////////////////////
    function controller($http, $state) {
      const vm = this;
      console.log('user log in component controller log');


      ////////////////////////////
      /////// SUBMIT USERNAME
      ////////////////////////////
      vm.submitUsername = function(username) {
        localStorage.username = username;
        // send a post to the users table
        // format the username like an object so it will be stringified
        $http.post('users-route/', {username: username})
          .then(function (response) {
            // vm.postResponse = response.data;
            $state.go('houseShow', {houseId: vm.houses[vm.houses.length -1].id })
          });
      };

    }
}());
