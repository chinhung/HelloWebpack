import moment from 'moment';
import angular from 'angular';
import uiRouter from 'angular-ui-router'; 
//import angular-ui-router that webpack will bundle it
//since all external modules export the name of module
//and also angular 1.X module system needs the module name
//we therefore do this

import routing from './app.config.js';

console.log('Hello Webpack!');
console.log(moment().format());
console.log(angular);
console.log(uiRouter);
console.log(routing);

var app = angular.module('app', [uiRouter]);
app.config(routing);

