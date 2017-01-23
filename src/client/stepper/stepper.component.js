(function() {
  'use strict';
  angular
    .module('app')
    .component('stepper', {
      controller: StepperController,
      templateUrl: 'stepper/stepper.template.html'
    })
    function StepperController() {
      const vm = this;
      console.log('Sanity Check form main app');
    }
}());
