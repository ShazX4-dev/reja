const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://bratvashah88_db_user:5797990Ts@cluster0.bkwalj1.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connected successfully");
      module.exports = client;
      //console.log(client);
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
