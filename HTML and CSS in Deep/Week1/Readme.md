# HTML and CSS
## Week 1
* `Hyper` -> one page contains link to other pages.
* `MarkUp` -> Page was developed with the semantic and meta tags.
* It decides what to display to the browser through webpage.
## Semantic Tags
* These tags **describes** all the contents inside the page to the browser.
-> 'header','main','footer',etc,.
* `'Article'` tag is used for <u>self-contained and independent content</u> and is like such content in newspaper which we cut off from it.
* '`Section'` tag just semantically describe the html page that's it and helps the developer about there is some sections.
* `'Aside'` -> A secondary set of content that is not required to understand the main content.
* `'Details'` -> A collapsed section of content that can be expanded if the user wishes to view it.
* `'Summary'` -> Specifies the summary or caption of a **'details'** element.
## Meta Tags and Meta Data
* Every browser has it's own algorithm for giving results of Search and it is measured by **SEO (Search Engine Optimization)**.
* And SEO is also based on **Semantic tags** influences, that is if our page has `'anchor'` tag it will go inside of another page and by analysing every page it would stack the result pages.
* Search algo, verifies the **'Meta tag'** in the head and it have two attributes are `name` and `content`.
* Some of them are,
    1. **name** = author, **content** = 'Kishore'
    2. **name** = description, **content** = "something about author"
    3. **name** = keywords, **content** = "filter,shopping,commerce,clothes"
    4. **name** = robot, **content** ="index,follow"-> <u>**index** is telling to analyze entire program and **follow** is telling go into all the hyper Links.</u>
    5. **name** = viewport, **content** = "width=device-width,initial-scale=1.0" -> <u>it is for responsive and SEO</u>.
## Preview a Website in the shared location
* This is achieved by **Open Graph Protocol**.
* In the **'Meta'** tag insert property and content attribute,
```javascript
<Meta property="og:title" content="Microsoft">
<Meta property="og:type" content="Website">
<Meta property="og:url" content="link.....">
<Meta property="og:image" content="image url should be pasted here">
<Meta property="og:description" content="some extra content">
<Meta property="og:locale" content="en_US">
<Meta property="og:site_name" content="Kishore's Website">
```
* We also should be create **Social Media cards** for our website to grab the user attention.
## Client and Server Side Validation
* HTML has input element and it will accept the user inputs with some validation such as email,text,number,tel,range,url,etc and some other client side validation which was done by JavaScript.
* There also occured server side validation for complex validation and it is very crucial because it avoids invalid data from the database.
## INPUTS
* Input tag has **button type** and `Button` itself is a separate element, hence the difference is predefined button element can contain **body text**.
* Label and input elements are connected together -> <u>id name should be same.</u>
```javascript
<form action="myserver.com" method="POST">
  …
<input type="submit" value="Submit" />
</form>
```
* `Datetime-local` has time also.
* `File type` should specify what file that is by `accept` attribute and for multiple selection, should include **Multiple** keyword.
* `Hidden type` -> Defines a control that is not displayed but whose value is still submitted to the server.
```javaScript
<input type="hidden" id="custId" name="custId" value="3487">
// tel
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```
-----------
* During creating a form make sure embed every **input** element in a `div tag` with label and ensure that both are connected by **for and id** attribute.
* Some of the default validation for the inputs in form are listed below,
```javaScript
<input type="text" id="user_name" name="user_name" required minlength="3" maxlength="13"/>
<style>
    input:invalid{
        border:1px solid red;
    }
    input:focus:invalid{
        border:1px solid red;
    }
</style>
```
* Whenever those default validations occur it will call the **invalid style** in CSS.
### Radio Button
* Wrap the set of radio buttons inside the `fieldSet` element and every radio button with name inside the `label` elements.
```javaScript
<fieldset>
    <label>
        <input type="radio" value="indoor" checked name="location"/> Indoor
    </label>
    <label>
        <input type="radio" value="outdoor" name="location"/> Outdoor
    </label>
</fieldset>
```
> - **http://microsoft/profile**
* `Action = "/login"` -> override the profile and redirects to login page.
* `Action = "login"` -> append with the existing link and happening child routing.
* GET method appends the **data** into the **url** and give it to the server and server extracts the data and return the response with *success or failure message*.
* But it is not `so secure` and some browser & Server has **url length limitations** so these GET method should not be comfortable case for all the time.
* Otherhand POST method fix the **data's to the body** the http request and give it to the server.
---------------
![Input texts](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/f701b460-251d-4641-ad42-302b8a76ea9a)
![Input checkboxes](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/2efc859c-6fed-49e0-baad-6fbdba52ff44)
* To avoid this we should point to every element and give common styles like <u>width and length = 100%</u>
* **'legend'** is used for caption to fieldset element.

## MEDIA TYPES
### Video
```javaScript
<video width="300px" height="300px" controls>
    <source src="dance.mp4" type="video/mp4">
    //if one format is not supported by browser it will find other file type
    <source src="dance.ogg" type="video/ogg">
</video>
```
### Audio
```javaScript
<audio controls>
    <source src="venmegam.mp3" type="audio/mpeg">
    //if one format is not supported by browser it will find other file type
    <source src="venmegam.ogg" type="audio/ogg">
</audio>
```
## Images
```javaScript
<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>
```
## IFrames
```javaScript
<iframe src="website.com" width="320" height="240" accept="camera 'none'; microphone 'none';" sandbox=""></iframe>
//empty string sandbox represents all the restrictions such as No popup, No downloads,etc... 'sandbox="allow-downloads allow-modals"'
```
* **allow="fullscreen”** the fullscreen mode can be activated 
* **allow=“geolocation”** lets you access the user’s location
```javaScript
<iframe name = "My Frame" width="400" height="300"></iframe>  
```
### referrerpolicy 
> - A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource. The common values are: 
* `no-referrer` The referrer header will not be sent. 
* `origin` The referrer will be limited to the origin of the referring page 
* `strict-origin` The origin of the document is sent as the referrer only when using the same protocol security level (HTTPS to HTTPS) 

> - **allow-downloads** Allows the user to download an item 
> - **allow-forms** Allows the user to submit forms 
> - **allow-modals** The resource can open modal windows 
> - **allow-orientation**-lock Lets the resource lock the screen orientation 
> - **allow-popups** Allows popups to open 
> - **allow-presentation** Allows a presentation session to start 
> - **allow-scripts** Lets the resource run scripts without creating popup windows
```javascript
<iframe src="my_iframe_src.html" srcdoc="<p>My inline html</p>" > 
</iframe> 
//srcdoc will override the src attribute
```
```javascript
<iframe src="my_iframe_src.html" loading="lazy" > 
</iframe> 
```
* `lazy` -> iframe content loaded only when those content are visible to user
* `eager` -> it also loaded while our webpage is getting load
```javascript
<iframe src="history.html" title="An embedded document about the history of my family" > 
</iframe> 
```