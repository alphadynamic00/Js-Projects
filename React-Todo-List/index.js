const dotenv = require('dotenv');
const express = require("express");
const app = express();
var mongoose = require("mongoose");

dotenv.config({path : './config.env' })
const DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true }).then(()=>{
  console.log("connection successfull");
}).catch(err => console.log(err))
app.use(express.json());
const port = process.env.PORT || 5000;

;

app.use(express.urlencoded({ extended: false }));

var todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  date: { type: Date, default: Date.now },
  fav: {type:Boolean, default: false}
});

var Todo = mongoose.model("Todo", todoSchema);

app.get("/display",async (req, res) => {

  const docs = await Todo.find();
  res.send(docs);
});

app.get("/display/fav",async (req, res) => {

  const docs = await Todo.find({fav : 'true'});
  res.send(docs);
});

app.post("/delete",(req, res) => {
  const id = req.body.id;
  Todo.findByIdAndRemove(id,(error)=>{
    if(!error)
    {
      res.send("item deleted")
    }else{
      res.status(400).send("Item was not deleted");
    }
  })
  
});



app.post("/add", (req, res) => {
  console.log(req.body);
  var myData = new Todo(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to your database");
    })
    .catch(() => {
      res.status(400).send("Item was not saved to your database");
    });
});

if ( process.env.NODE_ENV === "production"){

  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

  })

}

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
