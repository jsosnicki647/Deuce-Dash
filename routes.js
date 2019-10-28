
const path = require("path")


module.exports = function (app) {
    app.get("/", (req, res) => res.sendFile(path.join(__dirname,"public/index.htm")))

    app.get("/map", (req, res) => {
        res.sendFile(path.join(__dirname,"public/map.htm"))
    })
}