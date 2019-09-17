const express = require("express")
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3001;

// Routes
const userRoutes = require("./routes/user");

// Server as app
const app = express();

// Mongo Database 
const mongodb = process.env.DATABASE || "mongodb://localhost:8000/goodstry";
mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB Connected'))
  .catch(e => console.log(e));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middlewares
app.use('/api', userRoutes); 

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.listen(port, () => 
    console.log(`Server on PORT ${port}! http://localhost:${port}/`)
);
