function Sequencer( callback ) {
  var self = this;
  self.pattern = [];
  self.currentStep = 0;
  self.callback = callback;
}
Sequencer.prototype.set = function( arguments ) {
  var self = this;
  self.pattern = Array.prototype.slice.call( arguments );
  // this could change but for now let's reset the step when the pattern changes
  self.currentStep = 0;
};

Sequencer.prototype.next = function( nextTick ) {
  var self = this;

  if ( self.pattern.length ) {
    if ( typeof self.pattern[ self.currentStep ] === 'function' ) {

      self.callback( self.pattern[ self.currentStep ](), nextTick );


    } else {
      self.callback( self.pattern[ self.currentStep ], nextTick );
      console.log( "current step:", self.currentStep );
      // code inserted by coBeats team for visualization of stepping
      // if ( self.currentStep > 0 ) {
      //   var previousStep = ( self.currentStep ).toString();
      //   var previousCell = document.getElementById( previousStep );
      //   previousCell.classList.remove( 'current' );
      // } else if ( document.getElementById( "16" ).classList.contains( "current" ) ) {
      //   document.getElementById( "16" ).classList.remove( "current" )
      // } else if ( document.getElementById( "1" ).classList.contains( "current" ) ) {
      //   document.getElementById( "1" ).classList.remove( "current" )
      // }
      // if (self.currentStep === 0) {
      //   document.getElementById( "1" ).classList.
      // }
      // var d = document.getElementById( self.currentStep + 1 );
      // d.classList.add( "current" );

    }
    self.currentStep = ++self.currentStep % self.pattern.length;
    self.beatStep++
  }
};
