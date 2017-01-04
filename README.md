# README #

A basic menu system using React. The file data.json is used to decide whether to show an image or text for a menu item.

To make changes to bundle.js run 'npm install' then 'npm start'.

Basic snapshot testing can be done using 'npm test'.

*There was an open issue https://github.com/facebook/react/pull/8467/files at the time this was committed that prevented react-test-renderer from working and the documented fix needed applying.*

To use on your site you need:

- index.html (or your own html using bundle.js, an element with an id of 'container' and using style.css)
- bundle.js
- /css/style.css