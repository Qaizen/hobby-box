/*PLEASE NOTE: most of this code has been copied from:
        module 14, activity #28 (mini project)
*/

const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
// temp using without custom helpers   below the next line will be the proper code to use
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// temporarily using
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Inform Express.js on which template engine to use
// app.engine('handlebars', hbs.engine); need this next
// app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
