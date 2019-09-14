const express = require("express")
// const mongoose = require("mongoose")
// const routes = require("./routes");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello from Goodstry")
})

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(routes);

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/goodstry";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(port, () =>
    console.log(`Server on PORT ${port}! http://localhost:${port}/`)
);
