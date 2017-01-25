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
          beats: vm.sequence,
        } ]
        // var testSilence = [];
        // loadSounds( [
        //     '../../samples/silence.wav'
        //   ],
        //   function( list ) {
        //     testSilence = list;
        //   } );
      var testLead = [];
      loadSounds( [
          '../../samples/lead.wav'
        ],
        function( list ) {
          testLead = list;
        } );
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
