# Introduction to Frontend Development
## Week 2
* **Hypertext** -> the texts having the link to another webpage
* **Markup** -> the elements having the angle brackets that comes under Markup Language.
```javascript
//Inform the page, this is a HTML document
<!DOCTYPE html>
//root elements
<html>
    <!--Head should not show in the browser, it just give the instructions and meta data, Meta data is nothing but give the description of the page such as which language should use,etc..-->
    <head>
        <title>Kishore</title>
    </head>
    <!--It only shown in the browser-->
    <body>
    </body>
</html>
```
#### HTML forms
* form having **action** and **method** attribute in it, action is to specify the **path** and method is to specify which method it is POST or GET.
* Label the input tags are connected through `for` in label and `name` in input tag.
* All the `elements` in the html document is referred to `objects` in the DOM.

## CSS (Cascading Style Sheet)
![Css Basics](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/231fbb78-2c6a-44ad-8101-131a47ceaaf7)

* Style is applied to html elements by selector and the things inside the curly brackets are **declaration block** and css follows `property-value` pair whereas json and yaml follows `key-value` pair.

#### CSS Selectors
1. Element Selectors
2. ID Selectors
3. Class Selectors
4. Element with Class selectors
```Javascript
//HTML
<p class="introduction"></p>
//CSS
p.introduction { 
  margin: 2px;
}
```
5. Descendent Selectors
```javascript
//HTML
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
<div>
  <h1>Archives</h1>
</div>
//CSS
#blog h1 {
  color: blue;
}
``` 
<br>

&emsp; Here blue color applies only to the `h1` elements inside the `blog` id and it won't apply to h1 has `Archives`.

6. Child Selectors
```javascript
#blog > h1 {
  color: blue;
}
```
<br>

&emsp; Here blue color applies only to the `h1` **has Latest News** not all the h1 elements inside blog just the immediate child.

7. :hover Pseudo-Class

### Box Model in CSS
![Box Model](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/de12269e-d119-4805-bb8c-077ffa2a4656)

* Padding width is calculated by adding content width + padding left and padding right.
* Border width is calculated by adding padding width + border left and right.
* Margin height is calculated by adding border height + margin top and bottom.
* **Inline Elements** are anchor, image, label, bold, italics, emphasis, span and input tags.

### HTML Elements and text Alignment
```javascript
p {
    text-align: center;
}
```
* The `justify` alignment spreads the text out so that every line of the text has the same width.
* If we want to change the alignment of html elements we need to change the properties of `Box model` and should know about `Document flow`.
```javascript
//html
<div class="parent">
  <div class="child">
  </div>
</div>
//css
.parent {
  border: 4px solid red;
}
.child {
  width: 50%;
  padding: 20px;
  border: 4px solid green;
  margin: auto;
}
```
* but this method is work only for **block-level elements** not for **inline elements** but if you want to change this for inline elements,
```javascript
.child {
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
```
* To be more specific just give separate margin left and right not shorthand property of `margin: auto`.

