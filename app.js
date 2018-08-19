const express = require("express");
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();

const companies = require('./routes/companies');
const home = require('./routes/home');
const investors = require('./routes/investors');
const services = require('./routes/services');
const users = require('./routes/users');
const registerentity = require('./routes/registerentity');
const registerCompany = require('./routes/registerCompany');
const registerInvestor = require('./routes/registerInvestor');
const registerService = require('./routes/registerService');

//Middleware
app.use(express.static("public"));
app.use(
  body_parser.urlencoded({
    extended: false
  })
);
app.use(body_parser.json());

app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");

// Use routes
app.use('/companies', companies);
app.use('', home);
app.use('/investors', investors);
app.use('/services', services);
app.use('/users', users);
app.use('/registerentity', registerentity);
app.use('/registerCompany', registerCompany);
app.use('/registerInvestor', registerInvestor);
app.use('/registerService', registerService);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
