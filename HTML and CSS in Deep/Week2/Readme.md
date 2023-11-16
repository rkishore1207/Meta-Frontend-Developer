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
## Pseudo Selectors 
1. :hover
2. :active
3. :focus
## Form Selectors
1. :valid and :invalid
2. :enabled and :disabled -> especially for buttons
3. :checked and :indeterminate -> check boxes
## Specific position based states
1. first-of-type
2. last-of-type
3. nth-of-type
4. nth-last-of-type
## Pseudo Elements
* Pseudo elements have two colons in it.
```javascript
selector::name{
    property:value;
}
//html
<ul> 
    <li>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </li> 
    <li>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</li> 
    <li>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</li> 
</ul> 
//CSS
li::first-letter { 
color:coral; 
font-size: 1.3em; 
font-weight: bold; 
line-height: 1; 
}

li::first-line{

}

li::selection{
    background:brown;
    color:white;
}

li::marker{
    color:red;
    content:'<>';
}

li::befor{
    content:'Kishore';
    background-color:blue;
}

li::after{
    content:'!!';
    background-color:blue;
}

li::placeholder{

}
```
![Attribute Selectors](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/05fa057c-c210-4b23-92e4-623841932486)
## Web-link states
* `Link->Visited->Hover->Active` **(LVHA)**

# CSS Effects
* To grab the **users attention** but it is **slow down** the page load.
* `GIF` -> Graphic Interchange Form
* `Flash` is one the effects but it needs a special engine for browser to handle this.
    1. Hover Effects
    2. Cursor Effects
    3. Slide Shows
    4. Video Backgrounds
    5. Parallax
    6. Back To the Top
    7. Element and colour transitions
    8. Full screen snapping
## Text Effects
### Text overflow
```javascript
.text{
    white-space:nowrap;
    text-overflow:ellipses;
    text-overflow:clip;
    writing-mode:vertical-rl;//to place the text vertical
}
```
## Transform and Transition
* To change the position of an element use transform and to execute this with some time use transition properties.
```javascript
.box:hover{
    transform:rotateZ(60deg);
    transition:2s;
}
```
## Animations
```javascript
*{
    animation:myAnimation 5s linear 4s infinite forwards;
    //name duraion timing-function delay iteration-count fill-mode
}

@keyframes myAnimation{
    from{
        transform:rotateX(30deg);
    }
    to{
        transform:rotateX(60deg);
    }
}
```

## SCSS (Saasy CSS)
* That is declared the variables and assigned values to it and reused within the file.
```javascript
$font-color: red;
$margin: 20px;

@mixin myFunction{
    color:red;
    margin:20px;
    padding:30px;
}

.letter{
    font-color: $font-color;
    margin: $margin;
}

.ball{
    @include myFunction;
}
```
# Debugging
1. Skill based Errors
2. Rule based Errors
3. Knowledge based Errors
> - All the typos and syntax errors come under skill based, if we forgot to close the brackets, wrongly used quotation, etc.,
> - always class name starts with character instead of that using of number is come under rule based.
> - During working on complicated code base there occurs knowledge based errors.
* `OverSpecificity` takes more time to render the page hence we should know how to use specificity.
## Handling Errors
* CSS is not like other programming language to be *down* while examine errors, instead of just **ingnoring** the line which was not able to understand in addition with the **whole selector**.
* To see what the error message => **view->problems**
* `.stylelinttrc.json` is the extension to write the rule that you should use this particular value to this property alone.
* Then install the *StyleLint extensions* and go to the extension settings and find configure file, after enter the **.stylelinttrc.json** in it.
```javascript
{
    "rules": {
        "alpha-value-notation": "number",
        "selector-type-case": "lower",
        "color-no-hex": true
    }
}
```