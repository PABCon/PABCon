# Express Cheat Sheet

This document will be updated with useful Express syntax that i learn throught out my learning (working hopefully) journey!
Feel free to consult it and propose your recommendations as well.

## Installation

```npm install express ```


## General 

<pre>
const express = require('express');

const app = express();


app.listen(3000);

    console.log('Listening in port 3000')
});
</pre>

## Methods

### Get

<pre>
app.get('/',(req,res)=>{
res.send('<p>Hello World</p>');

})
</pre>

### Redirects

<pre>
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
</pre>

### 404

1. Should be on the bottom of the code, as it is used when there is no routing for a particular page.
<pre>
app.use((req, res) => {

    res.status(404).sendFile('./views/404.html', { root: __dirname });
})
</pre>


## View Engine

Setting up a view engine with EJS

```app.set('view engine', 'ejs');```
```app.set('views','myviews')``` - > select other folder to pick the templates from