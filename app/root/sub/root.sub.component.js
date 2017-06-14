var rootSubComponent = {
    bindings: {
        oneWay: '<',
        twoWay: '=',
        oneWayObj: '<'
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
    self.toggleObj1 = toggleObj1;
    self.toggleObj1Name = toggleObj1Name;
    self.toggleObj1Age = toggleObj1Age;

    function changeToWord() {
        self.oneWay = 'one';
        self.twoWay = 'two';
    }

    function changeToNumber() {
        self.oneWay = 1;
        self.twoWay = 2;
    }

    function toggleObj1() {
        if (self.oneWayObj.name == 'Mary') {
            self.oneWayObj = {
                name: 'John',
                innerObj: {age: 10}
            };
        } else {
            self.oneWayObj = {
                name: 'Mary',
                innerObj: {age: 20}
            };
        }
    }

    function toggleObj1Name() {
        if (self.oneWayObj.name == 'Mary') {
            self.oneWayObj.name = 'John';
        } else {
            self.oneWayObj.name = 'Mary';
        }
    }

    function toggleObj1Age() {
        if (self.oneWayObj.innerObj.age == 10) {
            self.oneWayObj.innerObj.age = 20;
        } else {
            self.oneWayObj.innerObj.age = 10;
        }
    }
}

export default rootSubComponent;