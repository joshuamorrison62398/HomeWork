const express = require('express')

const port = 3000

const app = express()



app.get("/", (req, res) => {
    res.send(`<h3>99 Bottles of beer on the wall</h3>
      <a href ="/98">Take one down, pass it around</a>`);
  });

app.get("/:numOfBottles", (req, res) => {
    let bottleNumbers = req.params.numOfBottles;
    if (bottleNumbers > 0) {
        res.send(`<h3>${bottleNumbers} bottles of beer on the wall</h3>
        <a href ="/${bottleNumbers - 1}">take one down, pass it around</a>`);
    } else {
        res.send(`no more beers! <a href ="/">please start over</a>`)
    }
});





app.listen(3000,  () => {
    console.log('listening on port 3000')
})
