//Requiring all need packages and locations
const express = require("express");
const routes = require("./routes");

//Creating a port and initializing the app
const PORT = process.env.PORT || 3001;
const app = express();

// Setting up static and route middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

//Catch all to send user back to index.html for undesired paths
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
)

// Server is started on passed port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});