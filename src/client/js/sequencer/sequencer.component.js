( function() {
  'use strict';
  angular.module( 'app' )
    .component( 'sequencer', {
      templateUrl: "js/sequencer/sequencer.template.html",
      controller: controller
    } );

  function controller() {
    const vm = this;
    vm.$onInit = onInit;
    vm.click = trackSelected;

    function trackSelected( index ) {
      // if(vm.tracks[0].beats[index])
      if ( vm.sequence[ index ] ) {
        // vm.tracks[0].beats[index] = 0;
        vm.sequence[ index ] = 0;
        if ( angular.element( document.getElementById( `${index}` ) ).hasClass( 'active' ) ) {
          angular.element( document.getElementById( `${index}` ) ).removeClass( 'active' )
        }
      } else {
        // vm.tracks[0].beats[index] = 1;
        vm.sequence[ index ] = 1;
        vm.track0.vol( vm.sequence );
        angular.element( document.getElementById( `${index}` ) ).addClass( 'active' );
      }
    }

    function onInit() {
      vm.sequence = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      vm.tracks = [ {

        beats: [ 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],

      } ]
      var beatsArray = vm.tracks[0].beats
      // var clock = new TimeSingleton(beatsArray)
      console.log(clock);
      // clock.start()
      // var testSilence = [];
      // loadSounds( [
      //     '../../samples/silence.wav'
      //   ],
      //   function( list ) {
      //     testSilence = list;
      //   } );


      var track0 = new track()

      // track0.saw().beat( 3 )
      // track0.adsr(.05, 7, 1, 1)//lead1

      // track0.sine().beat( 3 )
      // track0.adsr(0, .05, 0, 0)//kick


      // track0.tri().beat( 3 )
      // track0.adsr32(.05, .5, .7, .5)//bass

      // track0.tri().beat( 3 )
      // track0.adsr32(.08, 1, .5, .5)//lead2

      // track0.tri().beat( 3 )
      // track0.adsr32(0, 0, 0, 0)//silence

      // track0.square().beat( 3 )
      // track0.adsr32(.1, 1, .5, 2)//lead3



      var lead = track0.vol( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] )

      vm.track0 = new track()
        // track0.sample( testLead )
      vm.track0.beat( 3 )
        // .notes( walk.major(64))
        // track0.notes( walk.minor(63, 3))
        // var lead = track0.vol( vm.sequence )
      var lead = vm.track0.vol( vm.sequence )


      // NOTE: DOM manipulation is happening in lissajous/src/track.sequencer.js



      //create a button track.core, context
      //for visualization: create set interval
      //create array of cells 0-15 and repeat
      //button start interval time that console.logs
      //dom elements that target arrray
    }
  }

  // console.log("clock",controller.onInit.clock);
  // module.exports = {clock: controller.onInit.clock};
} )();
