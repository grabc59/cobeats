'use strict';
$(function() {
    // var socket = io.connect();
    var $messageForm = $('#messageForm');
    var $message = $('#message');
    var $messageHistory = $('#messageHistory');
    var $messageArea = $('#messageArea');
    var $userFormArea = $('#userFormArea');
    var $userForm = $('#userForm');
    var $users = $('#users');
    var $username = localStorage.username;
    var $myUserName = '';
    var typing = false;
    var timeout;



    $userForm.submit(function(e) {
        e.preventDefault();
        $myUserName = username.val();
        socket.emit('new user', username.val(), function(data) {
            if (data) {
                $userFormArea.hide();
                $messageArea.show();
            }
        });
        $username.val('');
    });

    socket.on('new user notification', function(data) {
        $messageHistory.append('<div class="well"><strong>' + data + '</strong> has joined the chat');
    });

    $messageForm.submit(function(e) {
      e.preventDefault();
      socket.emit('send message', $message.val());
      $message.val('');
      // when a message is submitted, clear the 'typing' timeout
      clearTimeout(timeout);
      timeout = setTimeout(timeoutFunction, 0);
    });


    socket.on('new message', function(data) {
      // add the message to the message box
      $messageHistory.append('<div class="well"><strong>' + data.user + '</strong>:' + data.msg + '</div>');
    });


    // populate 'online users'
    socket.on('get users', function(data){
      var html = '';
      for (var i = 0; i < data.length; i++) {
        // highlight the users's username
        if (data[i] === $myUserName) {
          html += '<li class="list-group-item active">' + data[i] + '</li>';
        } else {
          html += '<li class="list-group-item">' + data[i] + '</li>';
        }
      }
      $users.html(html);
    });



    // "'user' is typing" notification, send my username to the server
    function timeoutFunction() {
      typing = false;
      socket.emit("typing", false);
    }
    $message.keypress(function(e) {
      if (e.which !== 13) {
        if (typing === false && $message.is(":focus")) {
          typing = true;
          socket.emit("typing", true);
        } else {
          clearTimeout(timeout);
          timeout = setTimeout(timeoutFunction, 5000);
        }
      }
    });

    socket.on('isTyping', function(data) {
      if (data.isTyping) {
        if ($('#' + data.person + '').length === 0) {
          $("#updates").append("<li id='" + data.person + "'><span class='text-muted'><small><i class='fa fa-keyboard-o'></i>" + data.person + " is typing.</small></li>");
          timeout = setTimeout(timeoutFunction, 5000);
        }
      } else {
        $("#" + data.person + "").remove();
      }
    });
});
