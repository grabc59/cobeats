( function() {
  'use strict';
  angular
    .module( 'app' )
    .component( 'easel', {
      controller: controller,
      templateUrl: 'js/main/easel/easel.template.html'
    } )

  controller.$inject = [ 'socket' ];

  function controller( socket ) {
    const vm = this;

    vm.selectColor = selectColor;
    vm.applyColor = applyColor;
    vm.currentColor = '#FFFFFF'
    vm.pixelArray = pixelArray;
    vm.colorPallette = [ "#FFFFFF", "#C0C0C0", "#808080", "#404040" ];
    vm.playPixels = playPixels;

    function selectColor( event ) {
      vm.currentColor = event.target.style.backgroundColor;
      document.getElementById( 'current-color' ).style.backgroundColor = vm.currentColor;

    }

    function applyColor( event, index ) {
      console.log( index, vm.currentColor, event );
      event.target.style.backgroundColor = vm.currentColor;

      /////// SOCKET EVENT - PIXEL CLICK
      let pixelInfo = {
        index,
        currentColor: vm.currentColor
      };
      socket.emit( 'pixel click', pixelInfo );
    }

    /////// SOCKET EVENT - UPDATE PIXEL
    //// another user clicked a pixel
    socket.on( 'update pixel', function( data ) {
      // console.log('SOCKET EVENT', data, angular.element(document.getElementById(`#${data}`)));
      console.log( data.pixelInfo.index )
      document.getElementById( data.pixelInfo.index ).setAttribute( "style", `background-color: ${data.pixelInfo.currentColor}` );
    } );

    function pixelArray() {
      return new Array( 48 );
    }

    var colorPallette = [ "#FFFFFF", "#C0C0C0", "#808080", "#404040" ];

    function playPixels() {
      var row1Lead1Volume = [];
      var row1Lead1Notes = [];
      var row1BassVolume = [];
      var row1BassNotes = [];
      var row1Lead2Volume = [];
      var row1Lead2Notes = [];
      var row1Lead3Volume = [];
      var row1Lead3Notes = [];
      var row1KickVolume = [];
      // var track5Notes = [];

      // iterate over first row, create first sound layer
      for ( var i = 0; i < 16; i++ ) {
        switch ( true ) {
          case document.getElementById( i ).style.backgroundColor === 'Lead1A':
            row1Lead1Volume.push( 1 )
            row1Lead1Notes.push( 60 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead1C':
            row1Lead1Volume.push( 1 )
            row1Lead1Notes.push( 64 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead1G':
            row1Lead1Volume.push( 1 )
            row1Lead1Notes.push( 70 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2A':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 1 )
            row1Lead2Notes.push( 60 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2C':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 1 )
            row1Lead2Notes.push( 64 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2G':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 1 )
            row1Lead2Notes.push( 70 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3A':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 1 )
            row1Lead3Notes.push( 60 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3C':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 1 )
            row1Lead3Notes.push( 64 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3G':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 1 )
            row1Lead3Notes.push( 70 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassA':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 1 )
            row1BassNotes.push( 60 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassC':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 1 )
            row1BassNotes.push( 64 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassG':
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 1 )
            row1BassNotes.push( 70 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'rgb(128, 128, 128)': //kick
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 1 )
            break;

          default:
            row1Lead1Volume.push( 0 )
            row1Lead1Notes.push( 0 )
            row1BassVolume.push( 0 )
            row1BassNotes.push( 0 )
            row1Lead2Volume.push( 0 )
            row1Lead2Notes.push( 0 )
            row1Lead3Volume.push( 0 )
            row1Lead3Notes.push( 0 )
            row1KickVolume.push( 0 )

        }
      }
      // iterate over second row, create second sound layer
      var row2Lead1Volume = [];
      var row2Lead1Notes = [];
      var row2BassVolume = [];
      var row2BassNotes = [];
      var row2Lead2Volume = [];
      var row2Lead2Notes = [];
      var row2Lead3Volume = [];
      var row2Lead3Notes = [];
      var row2KickVolume = [];
      for ( var i = 16; i < 32; i++ ) {
        switch ( true ) {
          case document.getElementById( i ).style.backgroundColor === 'rgb(64, 64, 64)': //lead1A
            row2Lead1Volume.push( 1 )
            row2Lead1Notes.push( 60 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead1C': //lead1C
            row2Lead1Volume.push( 1 )
            row2Lead1Notes.push( 64 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead1G': //lead1G
            row2Lead1Volume.push( 1 )
            row2Lead1Notes.push( 70 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2A':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 1 )
            row2Lead2Notes.push( 60 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2C':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 1 )
            row2Lead2Notes.push( 64 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2G':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 1 )
            row2Lead2Notes.push( 70 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3A':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 1 )
            row2Lead3Notes.push( 60 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3C':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 1 )
            row2Lead3Notes.push( 64 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3G':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 1 )
            row2Lead3Notes.push( 70 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassA':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 1 )
            row2BassNotes.push( 60 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassC':
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 1 )
            row2BassNotes.push( 64 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'rgb(192, 192, 192)': //bassG
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 1 )
            row2BassNotes.push( 70 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'rgb(128, 128, 128)': //kick
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 1 )
            break;

          default:
            row2Lead1Volume.push( 0 )
            row2Lead1Notes.push( 0 )
            row2BassVolume.push( 0 )
            row2BassNotes.push( 0 )
            row2Lead2Volume.push( 0 )
            row2Lead2Notes.push( 0 )
            row2Lead3Volume.push( 0 )
            row2Lead3Notes.push( 0 )
            row2KickVolume.push( 0 )
        }
      }
      // iterate over third row, create third sound layer
      var row3Lead1Volume = [];
      var row3Lead1Notes = [];
      var row3BassVolume = [];
      var row3BassNotes = [];
      var row3Lead2Volume = [];
      var row3Lead2Notes = [];
      var row3Lead3Volume = [];
      var row3Lead3Notes = [];
      var row3KickVolume = [];
      for ( var i = 32; i < 48; i++ ) {
        switch ( true ) {
          case document.getElementById( i ).style.backgroundColor === 'Lead1A':
            row3Lead1Volume.push( 1 )
            row3Lead1Notes.push( 60 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead1C':
            row3Lead1Volume.push( 1 )
            row3Lead1Notes.push( 64 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead1G':
            row3Lead1Volume.push( 1 )
            row3Lead1Notes.push( 70 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2A':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 1 )
            row3Lead2Notes.push( 60 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2C':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 1 )
            row3Lead2Notes.push( 64 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead2G':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 1 )
            row3Lead2Notes.push( 70 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3A':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 1 )
            row3Lead3Notes.push( 60 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3C':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 1 )
            row3Lead3Notes.push( 64 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Lead3G':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 1 )
            row3Lead3Notes.push( 70 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassA':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 1 )
            row3BassNotes.push( 60 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassC':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 1 )
            row3BassNotes.push( 64 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'BassG':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 1 )
            row3BassNotes.push( 70 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
            break;
          case document.getElementById( i ).style.backgroundColor === 'Kick':
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 1 )
            break;

          default:
            row3Lead1Volume.push( 0 )
            row3Lead1Notes.push( 0 )
            row3BassVolume.push( 0 )
            row3BassNotes.push( 0 )
            row3Lead2Volume.push( 0 )
            row3Lead2Notes.push( 0 )
            row3Lead3Volume.push( 0 )
            row3Lead3Notes.push( 0 )
            row3KickVolume.push( 0 )
        }
      }
      // CREATE THE TRACKS
      var row1Lead1 = new Lead1Track( row1Lead1Volume, row1Lead1Notes )
      var row2Lead1 = new Lead1Track( row2Lead1Volume, row2Lead1Notes )
      var row3Lead1 = new Lead1Track( row3Lead1Volume, row3Lead1Notes )

      var row1Lead2 = new Lead2Track( row1Lead2Volume, row1Lead2Notes )
      var row2Lead2 = new Lead2Track( row2Lead2Volume, row2Lead2Notes )
      var row3Lead2 = new Lead2Track( row3Lead2Volume, row3Lead2Notes )

      var row1Lead3 = new Lead3Track( row1Lead3Volume, row1Lead3Notes )
      var row2Lead3 = new Lead3Track( row2Lead3Volume, row2Lead3Notes )
      var row3Lead3 = new Lead3Track( row3Lead3Volume, row3Lead3Notes )

      var row1Bass = new BassTrack( row1BassVolume, row1BassNotes )
      var row2Bass = new BassTrack( row2BassVolume, row2BassNotes )
      var row3Bass = new BassTrack( row3BassVolume, row3BassNotes )

      var row1Kick = new KickTrack( row1KickVolume )
      var row2Kick = new KickTrack( row2KickVolume )
      var row3Kick = new KickTrack( row3KickVolume )

      var pixelMusic = new group( row1Lead1, row2Lead1, row3Lead1, row1Lead2, row2Lead2, row3Lead2, row1Lead3, row2Lead3, row3Lead3, row1Bass, row2Bass, row3Bass, row1Kick, row2Kick, row3Kick );


    }

    function Lead1Track( volArr, notesArr ) {

      this.track = new track()
      this.track.saw().beat( 3 ).vol( volArr ).notes( notesArr )
      this.track.adsr( .05, 7, 1, 1 )
        //Lead1

    }

    function KickTrack( volArr ) {
      console.log( volArr );
      this.track = new track()
      this.track.sine().beat( 3 ).vol( volArr )
      this.track.adsr( 0, .05, 0, 0 )
        //Kick

    }

    function BassTrack( volArr, notesArr ) {
      console.log( volArr, notesArr );
      this.track = new track()
      this.track.tri().beat( 3 ).vol( volArr ).notes( notesArr )
      this.track.adsr32( .05, .5, .7, .5 )
        //Bass
    }

    function Lead2Track( volArr, notesArr ) {
      this.track = new track()
      this.track.tri().beat( 3 ).vol( volArr ).notes( notesArr )
      this.track.adsr32( .08, 1, .5, .5 )
        //Lead2

    }

    function Lead3Track( volArr, notesArr ) {
      this.track = new track()
      this.track.square().beat( 3 ).vol( volArr ).notes( notesArr )
      this.track.adsr32( .1, 1, .5, 2 )


      //Lead3

    }

    // track0.tri().beat( 3 )
    // track0.adsr32(0, 0, 0, 0)//silence
  }
}() );
