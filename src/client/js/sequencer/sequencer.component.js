( function() {
  'use strict'
  angular.module( 'app' )
    .component( 'sequencer', {
      templateUrl: "js/sequencer/sequencer.template.html",
      controller: controller
    } )

  function controller() {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      vm.tracks = [ {
        0: [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0 ]
      } ]
      var testSamples = [];
      loadSounds( [
          '../../samples/silence.wav',
          '../../samples/snare.wav'
        ],
        function( list ) {
          testSamples = list;
        } );
      var track0 = new track()
      track0.sample( testSamples )
      track0.beat( 1 )
      track0.ssq( vm.tracks[ 0 ][ 0 ] )



    }
  }
} )()
