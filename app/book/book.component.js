var bookComponent = {
    templateUrl: './app/book/book.component.html',
    controller: BookComponentController,
    controllerAs: 'vm'
};

BookComponentController.$inject = [];
function BookComponentController() {
    const self = this;
    self.items = [
        {
            title: 'Java Book',
            price: 200,
            itemTemplateUrl: './app/list/item/bookItem.component.html'
        },
        {
            title: 'JavaScript Book',
            price: 300,
            itemTemplateUrl: './app/list/item/bookItem.component.html'
        }
    ];
}

export default bookComponent;