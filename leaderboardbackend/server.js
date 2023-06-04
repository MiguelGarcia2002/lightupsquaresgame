const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routesUrls = require("./route/routes")
const cors = require("cors")

dotenv.config();

//mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log('database conencte'))
//THis happens because we're using an older version of the mongoose library.. smh
mongoose
  .connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("We're connected to the database baybe, yipe");
  })
  .catch((error) => {
    console.log("Bruh your ass is not connected: ", error);
  });


const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
  

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls(db)) 
app.listen(4000, () => console.log("server is running baybee"))