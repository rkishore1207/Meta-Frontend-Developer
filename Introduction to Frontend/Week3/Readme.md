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
* 