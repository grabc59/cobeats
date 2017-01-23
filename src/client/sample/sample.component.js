(function() {
  'use strict';
  angular
    .module('app')
    .component('sample', {
      controller: StepperController,
      templateUrl: 'sample/sample.template.html'
    })
    function StepperController() {
      const vm = this;
      console.log('Sanity Check form main app');
    }
}());
