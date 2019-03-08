var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      name: "albert",
      phone: "7866666666",
      email: "ahs012@gmail.com",
      time: "13:00",
    },
    {
      name: "shirley",
      phone: "7868888888",
      email: "shirley@gmail.com",
      time: "9:00",
    },
    {
      name: "frank",
      phone: "7867777777",
      email: "frank@burgerking.com",
      time: "10:00",
    }
   ];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

//display reservations
  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });


//add reservation

app.post("/api/reservations", function(req, res){
    var newRes=req.body;
   

  console.log(newRes);

  reservations.push(newRes);

  res.json(newRes);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });