import angular from 'angular';
import angularMeteor from 'angular-meteor';

import scatterplot from '../imports/components/scatterplot/plot';

angular.module('angular-toy', [
  angularMeteor,
  scatterplot.name
]);
