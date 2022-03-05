require("dotenv").config({ override: true });
const nodemailer = require("nodemailer");

const path = require("path");
const express = require("express");
const app = express();

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

const buildPath = path.join(__dirname, "./build");
console.log(buildPath + "BP");
app.use(express.json());
app.use(express.static(buildPath));
app.post("/send", (req, res) => {
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
              res.status(500).send({
                success: false,
              });
            } else {
              res.send({
                success: true,
              });
            }
          });
        }
      }
    );
  } catch (error) {
    res.status(500).send({
      success: false,
    });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
