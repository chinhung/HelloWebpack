var rootComponent = {
    templateUrl: './app/root/root.component.html',
    controller: RootComponentController,
    controllerAs: 'vm'
};

RootComponentController.$inject = [];
function RootComponentController() {
    const self = this;
    self.name = 'rootComponentController';
    self.value1 = 1;
    self.value2 = 2;
    self.changeToWord = changeToWord;
    self.changeToNumber = changeToNumber;

    function changeToWord() {
        self.value1 = 'one';
        self.value2 = 'two';
    }

    function changeToNumber() {
        self.value1 = 1;
        self.value2 = 2;
    }
}

export default rootComponent;