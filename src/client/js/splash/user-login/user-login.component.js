(function() {
  'use strict';
  angular
    .module('app')
    .component('userLogin', {
      controller: controller,
      templateUrl: 'js/splash/user-login/user-login.template.html'
    });

    controller.$inject = ['$http', '$state', 'socket'];

    ////////////////////////////
    /////// CONTROLLER
    ////////////////////////////
    function controller($http, $state, socket) {
      const vm = this;
      console.log('user log in component controller log');


      ////////////////////////////
      /////// SUBMIT USERNAME
      ////////////////////////////
      vm.submitUsername = function(username) {
        localStorage.username = username;
         vm.socket = io.connect();
        // send a post to the users table
        // format the username like an object (using es6) so it will be stringified
        $http.post('/users', {username})
          .then(function (response) {
            // vm.postResponse = response.data;
            $state.go('main');
          });
        socket.emit('new user', username.val(), function(data) {
            if (data) {
                $userFormArea.hide();
                $messageArea.show();
            }
        });
      };

    }
}());
