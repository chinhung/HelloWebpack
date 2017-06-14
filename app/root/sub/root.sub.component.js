var rootSubComponent = {
    bindings: {
        oneWay: '<',
        twoWay: '='
    },
    templateUrl: './app/root/sub/root.sub.component.html',
    controller: RootSubComponentController,
    controllerAs: 'vm'
};

RootSubComponentController.$inject = [];
function RootSubComponentController() {
    const self = this;
    self.name = 'RootSubComponentController';
}

export default rootSubComponent;