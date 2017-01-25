import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './plot.html';
 
class ScatterplotCtrl {
  constructor() {
    this.data = [{
      x: 1,
      y: 2
    }, {
      x: 2,
      y: 4
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 1
    }, {
      x: 5,
      y: 7
    }, {
      x: 6,
      y: 5
    }, {
      x: 7,
      y: 3
    }, {
      x: 8,
      y: 0
    }];
  }
}
 
export default angular.module('scatterplot', [
  angularMeteor
])
  .component('datapointstable', {
    templateUrl: 'imports/components/scatterplot/plot.html',
    controller: ScatterplotCtrl
  });

