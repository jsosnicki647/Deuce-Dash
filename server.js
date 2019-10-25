var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))

require("./routes")(app);

app.listen(process.env.PORT || PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s.",
      PORT,
      PORT
    )
  })
