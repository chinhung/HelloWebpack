routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
        url: '/',
        template: '<root-component></root-component>'
    })
    .state('person', {
        url: '/person',
        template: '<person-component></person-component>'
    })
    .state('book', {
        url: '/book',
        template: '<book-component></book-component>'
    });
};