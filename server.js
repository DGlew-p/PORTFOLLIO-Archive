require("dotenv").config({ override: true });
const nodemailer = require("nodemailer");

const path = require("path");
const express = require("express");
const app = express();

const buildPath = path.join("build");
console.log(buildPath + "BP");
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
app.use(express.static(buildPath));
app.post("/send", (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.messageHtml;

    const ejs = require("ejs");

    ejs.renderFile(
      __dirname + "/public/emailTemp.ejs",
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
              res.json({
                message: "fail",
              });
            } else {
              res.json({
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

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
