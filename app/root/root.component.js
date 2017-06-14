var rootComponent = {
    templateUrl: './app/root/root.component.html',
    controller: RootComponentController,
    controllerAs: 'vm'
};

RootComponentController.$inject = [];
function RootComponentController() {
    const self = this;
    self.name = 'RootComponentController';
    self.value1 = 1;
    self.value2 = 2;
    self.obj1 = {
        name: 'John',
        innerObj: {age: 10}
    };
    self.changeToWord = changeToWord;
    self.changeToNumber = changeToNumber;
    self.toggleObj1 = toggleObj1;
    self.toggleObj1Name = toggleObj1Name;
    self.toggleObj1Age = toggleObj1Age;

    function changeToWord() {
        self.value1 = 'one';
        self.value2 = 'two';
    }

    function changeToNumber() {
        self.value1 = 1;
        self.value2 = 2;
    }

    function toggleObj1() {
        if (self.obj1.name == 'Mary') {
            self.obj1 = {
                name: 'John',
                innerObj: {age: 10}
            };
        } else {
            self.obj1 = {
                name: 'Mary',
                innerObj: {age: 20}
            };
        }
    }

    function toggleObj1Name() {
        if (self.obj1.name == 'Mary') {
            self.obj1.name = 'John';
        } else {
            self.obj1.name = 'Mary';
        }
    }

    function toggleObj1Age() {
        if (self.obj1.innerObj.age == 10) {
            self.obj1.innerObj.age = 20;
        } else {
            self.obj1.innerObj.age = 10;
        }
    }
}

export default rootComponent;