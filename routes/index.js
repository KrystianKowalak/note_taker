//Requiring all need packages and locations
const apiRoutes = require("./apiRoutes/apiRoutes");
const htmlRoutes = require("./htmlRoutes");
const app = require("express").Router();

//Creating branching routes for api and html
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

//Exporting app
module.exports = app;