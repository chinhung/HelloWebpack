import moment from 'moment';
import angular from 'angular';
import uiRouter from 'angular-ui-router'; 
//import angular-ui-router that webpack will bundle it
//since all external modules export the name of module
//and also angular 1.X module system needs the module name
//we therefore do this

import routing from './app.config.js';

import rootComponent from './root/root.component.js';
import rootSubComponent from './root/sub/root.sub.component.js';

import listComponent from './list/list.component.js';
import itemComponent from './list/item.component.js';

import personComponent from './person/person.component.js';
import bookComponent from './book/book.component.js';


console.log('Hello Webpack!');
console.log(moment().format());
console.log(angular);
console.log(uiRouter);
console.log(routing);

var app = angular.module('app', [uiRouter]);
app.component('rootComponent', rootComponent);
app.component('rootSubComponent', rootSubComponent);
app.component('listComponent', listComponent);
app.component('itemComponent', itemComponent);
app.component('personComponent', personComponent);
app.component('bookComponent', bookComponent);
app.config(routing);


