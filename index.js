const express = require("express");
const { join } = require("path");
const app = express();
const router = express.Router();
const c = require("colors");

router.get("/", function(req, res){
  res.sendFile(join(__dirname+`/site/index.html`))
  
})
router.get("/guia", function(req, res){
  res.sendFile(join(__dirname+`/site/guia.html`))

})


app.use("/", router)

app.listen(process.env.PORT)

