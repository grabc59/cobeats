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
    vm.activateBeat = activateBeat;

    function onInit() {
      vm.tracks = [ {
          beats: [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ],

        } ]
        // var testLead = [];
        // loadSounds( [
        //     '../../samples/lead.wav'
        //   ],
        //   function( list ) {
        //     testLead = list;
        //   } );
      var track0 = new track()
        // track0.sample( testLead )
      track0.beat( 1 )
      var lead = track0.vol( [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ] )

      // NOTE: DOM manipulation is happening in lissajous/src/track.sequencer.js

      // clock.start();

      //create a button track.core, context
      //for visualization: create set interval
      //create array of cells 0-15 and repeat
      //button start interval time that console.logs
      //dom elements that target arrray

    }

    function activateBeat( beat ) {
      console.log( "click" );
      if ( beat === 1 ) {
        beat = 0
      } else {
        beat = 1
      }
    }
  }
  // console.log("clock",controller.onInit.clock);
  // module.exports = {clock: controller.onInit.clock};
} )();
