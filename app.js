const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
const port = 3000

const app = express()

app.use(methodOverride('_method'))
app.use(routes);

app.listen(port,() => {
  console.log(`Express is listen on localhost:${port}`);
})