( function() {
  'use strict';
  angular
    .module( 'app' )
    .component( 'easel', {
      controller: controller,
      templateUrl: 'js/main/easel/easel.template.html'
    } )

  controller.$inject = ['socket'];

  function controller(socket) {
    const vm = this;

    vm.selectColor = selectColor;
    vm.applyColor = applyColor;
    vm.currentColor = '#FFFFFF'
    vm.pixelArray = pixelArray;
    vm.colorPallette = ["#FFFFFF", "#C0C0C0", "#808080", "#404040"];

    function selectColor( event ) {
      vm.currentColor = event.target.style.backgroundColor;
      document.getElementById( 'current-color' ).style.backgroundColor = vm.currentColor;

    }

    function applyColor( event, index ) {
      console.log(index, vm.currentColor, event);
      event.target.style.backgroundColor = vm.currentColor;

      /////// SOCKET EVENT - PIXEL CLICK
      let pixelInfo = {
        index,
        currentColor: vm.currentColor
      };
      socket.emit('pixel click', pixelInfo);
    }

    /////// SOCKET EVENT - UPDATE PIXEL
    //// another user clicked a pixel
    socket.on('update pixel', function(data) {
      // console.log('SOCKET EVENT', data, angular.element(document.getElementById(`#${data}`)));
      console.log(data.pixelInfo.index)
      document.getElementById(data.pixelInfo.index).setAttribute("style", `background-color: ${data.pixelInfo.currentColor}`);
    });

    function pixelArray() {
      return new Array( 48 );
    }

    var colorPallette = ["#FFFFFF", "#C0C0C0", "#808080", "#404040"];
  }
}() );
