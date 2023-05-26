const express = require("express");


const PORT = 6000;

const app = express();

console.log(app)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log("App is started " + PORT)
})

