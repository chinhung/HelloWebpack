var personComponent = {
    templateUrl: './app/person/person.component.html',
    controller: PersonComponentController,
    controllerAs: 'vm'
};

PersonComponentController.$inject = [];
function PersonComponentController() {
    const self = this;
    self.items = [
        {
            name: 'Peter',
            age: 20,
            itemTemplateUrl: './app/list/item/personItem.component.html'
        },
        {
            name: 'Lisa',
            age: 18,
            itemTemplateUrl: './app/list/item/personItem.component.html'
        }
    ];
}

export default personComponent;