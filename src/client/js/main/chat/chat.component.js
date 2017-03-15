( function() {
  'use strict';
  angular
    .module( 'app' )
    .component( 'chat', {
      controller: controller,
      templateUrl: 'js/main/chat/chat.template.html'
    } );

  controller.$inject = [ '$http', '$state', 'socket', '$timeout' ];

  ////////////////////////////
  /////// CONTROLLER
  ////////////////////////////
  function controller( $http, $state, socket, $timeout ) {
    const vm = this;

    ////// INIT
    vm.$onInit = function() {
      vm.current_user = localStorage.username;
      vm.user_id = localStorage.user_id;
      vm.connected_users = [];
      socket.emit( 'new user', localStorage.username, function( data ) {
        console.log( 'new user log: ', data, localStorage.username );
      } );
      vm.getMessages();
      vm.messageTimeout();
    }

    ///////////////////////////////////
    /////// CONTROLLER FUNCTIONS
    ///////////////////////////////////

    vm.electronAlert = function( fromUser, message ) {
      if ( fromUser === vm.current_user ) {
        console.log( "message from me" )
        // $user.addClass('me');
      } else {
        console.log( "MAKE AN ELECTRON NOTIFICATION" );
        new Notification( 'New Message', {
          body: fromUser + ': ' + message
        } );
      };
    };


    vm.getMessages = function() {
      return $http.get( '/messages' )
        .then( function( data ) {
          vm.chatMessages = data.data;
        } )
    }

    vm.messageTimeout = function() {
      $timeout( () => {
        let messageDiv = document.getElementById( 'messageHistory' );
        messageDiv.scrollTop = messageDiv.scrollHeight;
      }, 0, false );
    }

    vm.sendMessage = function( newMessage ) {
      socket.emit( 'send message', newMessage.content );

      newMessage.user_id = vm.user_id;
      $http.post( '/messages', newMessage )
        .then( function( response ) {
          vm.newMessage.content = "";
        } )
        .catch( function( error ) {
          console.error( error );
        } )
      // when a message is submitted, clear the 'typing' timeout
      // vm.clearTimeout(timeout);
      // vm.timeout = setTimeout(timeoutFunction, 0);
    }

    ///////////////////////////////////
    /////// SOCKET EVENTS
    ///////////////////////////////////

    ////// NEW USER NOTIFICATION
    socket.on( 'new user notification', function( data ) {
      //$messageHistory.append('<div class="well"><strong>' + data + '</strong> has joined the chat');
    } );

    ////// POPULATE USERS ONLINE
    socket.on( 'get users', function( data ) {
      vm.connected_users = data
    } );

    ////// NEW MESSAGE EVENT
    socket.on( 'new message', function( data ) {
      vm.chatMessages.push( data );
      vm.messageTimeout();
      vm.electronAlert( data.username, data.content );
    } );





  }
}() );
