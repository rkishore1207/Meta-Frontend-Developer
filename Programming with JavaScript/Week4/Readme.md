# Progrmming with Javascript
## Week 4
### JavaScript Engine
* In 1886, **karl Benz** invented `Combustion engine` after then everyone make use of that combustion engines in all areas like aeroplane,boats,bikes,etc..
* Similar to that, after the creation of `node and npm`, javascript becomes a language which is to be used for both *frontend and backend*.
* Ryan Dao identified that **google's javascript v8 engine** is eligible for server side also.
* Node js is a standalone environment which run on differenct platforms such as backend, command line and desktop applications.
* NPM is the **package** for node js which have all the libraries and dependencies.
### What is Testing?
* `Refactoring` -> adding the set of code (testing codes) without disturbing the existing functionality of the code.
```javascript
function addTwo(strA,strB){
    return strA+strB;
}
expect(addTwo("abc","def")).toBe("abcdef"); //green
expect(addTwo(1,2)).toBe(12); //Red
```
### Types of Testing
    1. End To End Testing (e2e)
    2. Integration
    3. Unit Testing
1. `e2e` -> Test the webapplication as **how user** would use the application and execute this test to a **completed application** and it is **slower and time consuming** testing and tester is not a developer.
* Some of the e2e testing frameworks are,
    * WebDriver JS
    * Protractor
    * Cypress

2. `Integration` -> How a piece of code is communicating with other parts of the code and it is fast than e2e testing and some of the tools are,
    * React testing library
    * Enzyme
3. `Unit Test` -> To test the small units of the code that is functions without affect existing functionalities and it very cheap and fast than other two tests.