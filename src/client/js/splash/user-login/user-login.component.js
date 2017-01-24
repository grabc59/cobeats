(function() {
  'use strict';
  angular
    .module('app')
    .component('userLogin', {
      controller: controller,
      templateUrl: 'js/splash/user-login/user-login.template.html'
    })

    controller.$inject = ['$http'];

    function controller($http) {
      const vm = this;
      console.log('user log in component controller log');


      vm.submitUsername = function(username) {
        // console.log('username: 'username);

        //set the username in localstorage
        localStorage.username = username;

        // send a post to the users table
        // format the username like an object so it will be stringified
        $http.post('users-route/', {username: username})
          .then(function (response) {
            vm.postResponse = response.data;
            console.log('success');
          });

      }
    }
}());
