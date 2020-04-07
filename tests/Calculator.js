let homepage = require('../Pages/Homepage')
describe('demo calculator tests', function () {

    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.EnterFirstNumber_input('3');

        homepage.EnterSecondNumber_input('4');

        homepage.clickGo();


        homepage.verifyResult('7');

        browser.sleep(2000)



    });

    it('substraction test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.EnterFirstNumber_input('3');

        homepage.EnterSecondNumber_input('4');

        homepage.clickGo1();


        homepage.verifyResult('7');

        browser.sleep(2000)



    });
});