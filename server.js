

const Express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const morgan = require("morgan");
//mongodb+srv://abesh:<password>@cluster0-duuve.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://abesh:abesh@cluster0-duuve.mongodb.net/abeshtest?retryWrites=true&w=majority",
      { useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
          console.log('mongodb connected')
      });


require("./model/post");
var app = Express();
app.use(BodyParser.json()).use(morgan())

app.use(BodyParser.urlencoded({ extended: true }));
app.use("/posts", require("./routes/posts.js"));

app.listen(3005, () => {
    console.log("port 3005 running");
})
