(function() {
  'use strict';
  angular
    .module('app')
    .component('chat', {
      controller: controller,
      templateUrl: 'js/main/chat/chat.template.html'
    });
    
    ////////////////////////////
    /////// CONTROLLER
    ////////////////////////////
    function controller() {
      const vm = this;
      console.log('chat component controller log');
    }
}());
