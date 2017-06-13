routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
        url: '/',
        template: '<root-component></root-component>'
    })
    .state('page1', {
        url: '/page1',
        template: '<div>page1</div>'
    })
    .state('page2', {
        url: '/page2',
        template: '<div>page2</div>'
    });
};