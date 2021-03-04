var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const config = require("./config");

var transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", function (req, res, next) {
  console.log("Backend message recieved, Email: " + req.body.Email);
  res.send("POST handler for /dogs route.");
  var email = {
    from: req.body.Name,
    to: config.USER, // Change to email address that you want to receive messages on
    subject: req.body.Subject,
    text:
      "name: " +
      req.body.Name +
      "\nemail: " +
      req.body.Email +
      "\nmsg: " +
      req.body.Message,
  };

  transporter.sendMail(email, (err, data) => {
    if (err) {
      res.json({
        status: 0,
      });
    } else {
      res.json({
        status: 1,
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000);
