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