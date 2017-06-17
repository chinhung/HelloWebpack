var listComponent = {
    bindings: {
        items: '<'
    },
    templateUrl: './app/list/list.component.html',
    controller: ListComponentController,
    controllerAs: 'vm'
};

ListComponentController.$inject = [];
function ListComponentController() {
    const self = this;

}

export default listComponent;