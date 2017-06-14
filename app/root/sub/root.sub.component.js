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
    self.changeToWord = changeToWord;
    self.changeToNumber = changeToNumber;

    function changeToWord() {
        self.oneWay = 'one';
        self.twoWay = 'two';
    }

    function changeToNumber() {
        self.oneWay = 1;
        self.twoWay = 2;
    }
}

export default rootSubComponent;