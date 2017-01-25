( function() {
  'use strict';
  angular.module( 'app' )
    .component( 'sequencer', {
      templateUrl: "js/sequencer/sequencer.template.html",
      controller: controller
    });
  function controller(){
    const vm = this;
    vm.$onInit = onInit;
    vm.click = function(index, e) {
      console.log(e.target);
      // if(vm.tracks[0].beats[index]) {
      if(vm.sequence[index]) {
        // vm.tracks[0].beats[index] = 0;
        vm.sequence[index] = 0;
            if(angular.element(document.getElementById(`${index}`)).hasClass('active')) {
              angular.element(document.getElementById(`${index}`)).removeClass('active')
            }
      } else {
        // vm.tracks[0].beats[index] = 1;
        vm.sequence[index] = 1;
        angular.element(document.getElementById(`${index}`)).addClass('active');
      }
    }
    function onInit() {
      vm.sequence = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      vm.tracks = [ {
        beats: vm.sequence,
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
      var testLead = [];
      loadSounds( [
          '../../samples/lead.wav'
        ],
        function( list ) {
          testLead = list;
        } );
      var track0 = new track()
      // track0.sample( testLead )
      track0.beat( 3 )
      // .notes( walk.major(64))
      // track0.notes( walk.minor(63, 3))
      // var lead = track0.vol( vm.sequence )
      var lead = track0.vol( vm.sequence )

      // track0.start();
      track0.currentTime + track0.lookaheadTime

    function drawPlayhead(currentIndex) {
    var previousIndex = (currentIndex + loop_length - 1) % loop_length;
    var $newRows = $('.column_' + currentIndex);
    var $oldRows = $('.column_' + previousIndex);

    $newRows.addClass("playing");
    $oldRows.removeClass("playing");

    let element = angular.element('#beat'+currentIndex).attr("class","active")
}

// clock.start();

//create a button track.core, context
//for visualization: create set interval
//create array of cells 0-15 and repeat
//button start interval time that console.logs
//dom elements that target arrray

    }
  }
  // console.log("clock",controller.onInit.clock);
  // module.exports = {clock: controller.onInit.clock};
})();
