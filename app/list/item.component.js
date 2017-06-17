var itemComponent = {
    bindings: {
        item: '<'
    },
    templateUrl: './app/list/item.component.html',
    controller: ItemComponentController,
    controllerAs: 'vm'
};

ItemComponentController.$inject = [];
function ItemComponentController() {
    const self = this;

}

export default itemComponent;