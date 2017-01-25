(function() {
  'use strict';
  angular
    .module('app')
    .component('chat', {
      controller: controller,
      templateUrl: 'js/main/chat/chat.template.html'
    });

    controller.$inject = ['$http', '$state', 'socket'];
    
    ////////////////////////////
    /////// CONTROLLER
    ////////////////////////////
    function controller($http, $state, socket) {
      const vm = this;
      console.log('chat component controller log');

      ////// INIT
      vm.$onInit = function() {
        vm.current_user = localStorage.username
        vm.connected_users = [];
        socket.emit('new user', localStorage.username, function(data) {
            console.log('new user log: ', data, localStorage.username);
        });
      }

      ////// NEW USER NOTIFICATION
      socket.on('new user notification', function(data) {
        // vm.connected_users.push(data);
        //$messageHistory.append('<div class="well"><strong>' + data + '</strong> has joined the chat');
      });

      ////// POPULATE USERS ONLINE
      socket.on('get users', function(data){
        vm.connected_users = data
        console.log(vm.connected_users);
      });
    }
}());
