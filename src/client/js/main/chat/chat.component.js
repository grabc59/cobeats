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
      vm.$onInit = function() {
        // socket.emit('new user', username.val(), function(data) {
        socket.emit('new user', localStorage.username, function(data) {
            // if (data) {
            //     $userFormArea.hide();
            //     $messageArea.show();
            // }
            console.log('new user log: ', data, localStorage.username);
        });
      }
    }
}());
