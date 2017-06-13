var rootComponent = {
    templateUrl: './app/root/root.component.html',
    controller: RootComponentController,
    controllerAs: 'vm'
};

RootComponentController.$inject = [];
function RootComponentController() {
    const self = this;
    self.name = 'rootComponentController';
}

export default rootComponent;