// import React from 'react';
// import ReactDOM from 'react-dom';

//const nav_bar= document.querySelector(".navigation_bar")
const nav_bar= document.getElementById("react")
console.log(nav_bar);
ReactDOM.render(React.createElement(
    "a",{href:"www.google.com"},"google"),nav_bar
);