const express = require("express")
const app = express();

const userRoutes = require("./routes/user");

const mongoose = require("mongoose")

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3001;

// Mongo Database 
const mongodb = process.env.DATABASE || "mongodb://localhost/goodstry";
mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB Connected')); 

//routes
app.use(userRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello from Goodstry")
// })

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }




app.listen(port, () =>
    console.log(`Server on PORT ${port}! http://localhost:${port}/`)
);
