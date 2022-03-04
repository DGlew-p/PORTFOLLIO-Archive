require("dotenv").config({ override: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const nodemailer = require("nodemailer");
const path = require("path");
const buildpath = path.join(__dirname, "..", "build");
var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("T success");
  }
});

app.use(express.json());
app.use(express.static(buildpath));
app.post("/send", (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.messageHtml;

    const ejs = require("ejs");

    ejs.renderFile(
      __dirname + "/views/emailTemp.ejs",
      { name: name, email: email, message: message },
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var mailOptions = {
            from: email,
            to: process.env.USER,
            subject: name,
            template: "emailTemp",
            html: data,
          };

          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              res.jason({
                message: "fail",
              });
            } else {
              res.jason({
                message: "success",
              });
            }
          });
        }
      }
    );
  } catch (error) {
    res.jason({
      message: "fail",
    });
  }
});
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
