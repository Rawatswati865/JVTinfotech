require('dotenv').config()
const adminRoutes = require('./routes/admin')
var express = require('express');
const connectdb = require("./connection.js");

var app = express();
connectdb()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', adminRoutes);



const port = process.env.PORT

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})