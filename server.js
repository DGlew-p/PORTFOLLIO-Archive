require("dotenv").config({ override: true });

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const favicon = require("serve-favicon");
const path = require("path");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("T success");
  }
});

app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.post("/send", (req, res, next) => {
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

        transporter.sendMail(mailOptions, (err, data) => {
          if (err) {
            res.json({
              msg: "fail",
            });
          } else {
            res.json({
              msg: "success",
            });
          }
        });
      }
    }
  );
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
