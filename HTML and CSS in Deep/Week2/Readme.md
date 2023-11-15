# HTML and CSS in depth
## Week 2
* `Flexbox` was introduced first and it is **one-dimensional** which means at a time we can use column or row.
* `Grid` is **two dimensional** we can access both row and column at same time.
* Flex is used as *small scale* place whereas grid can be used in *large scale* or complicated places.
# FlexBox
* It gives **dynamic control** to the container by shrinking and growing and has two axis.
* The default axis is called **main axis** and opposite to that is called **cross axis**.
* `'align-self'` is the property for individual items in the container.
* Flex has shorthand property: *Flex: grows shrink basis (0 1 auto)*.
### CSS Units
* There are two types of units in css are **Absolute and Relative**.
* Absolute is `fixed` and Relative is `in relation` to the Parent.
![Absolute units in css](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/16449fe3-1b63-4088-86e3-e6aa6441c301)
![Relative units in css](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/3afd6b97-5f73-4de2-8e48-3ac14fdb00c4)
-----------------
* Default shorthand property is 0 1 auto.
* **Fraction** is selectively divide the pages into **rows**.
* `grid-gap or grid-gutter` -> represents the gap between items.
* **grid-template-rows** is less effiecient that **grid-auto-rows**.
```javascript
grid-template-columns: repeat(3,100px);
grid-auto-rows: minmax(150px,auto);
```
* Two commonly used grid frameworks are `12 and 16 columns` frameworks.
# CSS Selectors
1. Element Selector
2. Class Selector
3. Id Selector
4. **Attribute Selector** -> by the attribute of one element we can point that particular element.
```javascript
<div class="https://localhost:5500" ></div>
//Css
div[class*="localhost"]{
    color:green;
}
```
5. **nth-of-type and nth-child** -> 
```javascript
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
//Css
li:nth-of-type(2){
    color:green;
}
```
6. **Star Selector or Universal selector (*)** -> this properties will be applied to all the elements in the file.
7. **Group Selector or Stacking Selector** -> with the selector we can group the elements together and reduce the code duplication.
## CSS Specificity
* Id = 10;
* class and elements = 1;
```javascript
p #bar => 1 element & 1 ID =>  0 1 0 1 => Score: 101
p .foo => 1 element & 1 class => 0 0 1 1 => Score: 11
p .p .foo => 1 element & 2 class =>  0 0 2 1 => Score: 21
```
* Specificity calculation => `Id+Class+Element`
## Combination Selectors
* **Descendent Selectors** -> selects all the element nested inside the descendent element. `(h2 p)`
* **Child Selectors** -> selects only the immediate children. `(h2>p)`
* **General Sibling** -> selects all the subsequent sibling tags. `(h2~p)`
* **Adjacent Sibling** -> only select the next sibling tag. `(h2+p)`
