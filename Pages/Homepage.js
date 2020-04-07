let Homepage = function(){
    let FirstNumber_input = element(by.model('first'));

    let SecondNumber_input = element(by.model('second'));

    let GoButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){

        browser.get(url);
    };

    this.EnterFirstNumber_input = function(firstNo){

        FirstNumber_input.sendKeys(firstNo);
    };

    this.EnterSecondNumber_input= function(secondNo){

        SecondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = function(){

        GoButton.click();
    };

    this.verifyResult = function(result){

        let output = element(by.cssContainingText('.ng-binding', result));

        expect(output.getText()).toEqual(result);
    };
};

module.exports = new Homepage();
