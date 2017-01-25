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

      ////// INIT
      vm.$onInit = function() {
        vm.current_user = localStorage.username
        vm.connected_users = [];
        socket.emit('new user', localStorage.username, function(data) {
            console.log('new user log: ', data, localStorage.username);
        });
        vm.getMessages();
      }

      ///////////////////////////////////
      /////// CONTROLLER FUNCTIONS
      ///////////////////////////////////
      vm.getMessages = function (){
        return $http.get('/messages')
          .then(function(data) {
            console.log(data);
            vm.chatMessages = data;
          })
      }

      ///////////////////////////////////
      /////// SOCKET EVENTS
      ///////////////////////////////////
      
      ////// NEW USER NOTIFICATION
      socket.on('new user notification', function(data) {
        console.log(data);
        //$messageHistory.append('<div class="well"><strong>' + data + '</strong> has joined the chat');
      });

      ////// POPULATE USERS ONLINE
      socket.on('get users', function(data){
        vm.connected_users = data
        console.log(vm.connected_users);
      });

      ////// NEW MESSAGE EVENT
      socket.on('new message', function(data) {
        console.log('new message: ', data)
//       // add the message to the message box
//       $messageHistory.append('<div class="well"><strong>' + data.user + '</strong>:' + data.msg + '</div>');
      });
    }
}());
