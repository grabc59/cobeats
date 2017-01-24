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
        beats: [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],

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
      var track0 = new track()
      track0.sample( testLead )
      track0.beat( 4 ).notes( walk.major(64))
      track0.notes( walk.minor(63, 3))
      // track0.vol( [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0 ] )
      track0.start();
      track0.currentTime + track0.lookaheadTime

    function drawPlayhead(currentIndex) {
    var previousIndex = (currentIndex + loop_length - 1) % loop_length;
    var $newRows = $('.column_' + currentIndex);
    var $oldRows = $('.column_' + previousIndex);

    $newRows.addClass("playing");
    $oldRows.removeClass("playing");
}


    }
  }
} )()
