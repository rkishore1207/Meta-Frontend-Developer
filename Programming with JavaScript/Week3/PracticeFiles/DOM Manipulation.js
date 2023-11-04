// DOM Editing
const h2 = document.createElement('h2');
h2.innerText="This is h2 Element";
h2.setAttribute('id','subHeading');
h2.setAttribute('class','secondary');
document.body.appendChild(h2);
console.logg(h2);