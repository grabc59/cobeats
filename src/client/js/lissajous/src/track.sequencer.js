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
      if ( self.currentStep >= 1 ) {
        var previousStep = self.currentStep - 1;
        var previousCell = document.getElementById( previousStep );
        previousCell.classList.remove( 'current' );
      } else if ( document.getElementById( "15" ).classList.contains( "current" ) ) {
        document.getElementById( "15" ).classList.remove( "current" )


      }
      var d = document.getElementById( self.currentStep );
      d.classList.add( "current" );
    }
    self.currentStep = ++self.currentStep % self.pattern.length;
    self.beatStep++
  }
};
