# Introduction to Frontend Development
## Week 3
* Bootstrap often provided both CSS ans javascript libraries
```javascript
<head>
    <link href="bootstrap link" rel="stylesheet"/>
</head>
<body>
    <script src="bootstrap link for javascript">
    </script>
</body>
```
* If we using one dependency may be it will depend on some dependency we need to install that also, hence it follow **dependency tree** in our project.
* And we not make sure all our team members using the same version of that dependency.
* Hence Package Manager came into picture and we need to specify the name and version of the dependency, then rest of the work will take care by Package manager.
* If we want to deploy our application into server we need to bundle it that is combine all the dependencies into **single bundle**, the tool used to bundle up are **Webpack** or **gulp**.
#### Responsive design
* Usual laptop width is `1920px` and height is `1080px`.
* Responsiveness is achieved by three things are Flexible grids, Fluid images and Media queries.

![Breakpoints](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/364af3d3-bb42-47f6-9459-6f74b8f1921b).

* Some of the Modifiers in Bootstrap are Primary, Secondary, Success, Danger, Info, Warning, Light, Dark.
* Always bootstrap row and columns start with `Container`.
* `img-fluid` -> it changes its width according to the parent element.

### Static and Dynamic Contents
* Static contents are already uploaded in webserver and it will show to user eg, images,videos or texts.
* Dynamic contents are updated by every `http` requests which was triggered by **user** or sometime if we visit news website it will update based on **Date**.
* If we request to play video in the browser it send ask the web server and sends back the video file, this is how the static content works.
* For dynamic content, if we login to coursera 1st the web browser check our logIn Credential through the Application server and based on the response web server suggests the video to us.
* But application server (Backend) takes more time to process all the requests from the client. To resolve this,
* Web Server having a cache storage, here it will store the request which was made by user and next time the same request came from user it will immediately return back the response without asking to the application server.
![Dynamic content updation process](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/62880c83-94a9-4c57-b8d1-047f3ec268c8).
### Single Page Application
* Follows two methods such as **Bundling** -> if browser requests an application web server returns the necessary html, css, javascript file to load it in the browser.
* whereas **LazyLoading** -> sends only minimal files to load on the server.
* Traditional application or Multipage application cannot render while network is slow because it have entire applications, so only we are going for Single Page Application.
* If one request is ask from the user and those response is render in a **new page** in MPA whereas in SPA there is a **view** based pages so every components are rendered in the view of that page.
### How React Components Works?
* Html documents are stored in the server as **DOM**, while react application is build, it will transformed everything into `virtual DOM` and render it in the browser.
* Once the react components are changed, 1st it will compares it with `previous version` of virtual DOM and updates that particular components only.
* And that virtual DOM compares with the `website DOM` and updates the changed components only.
* This process is called **Reconciliation**.