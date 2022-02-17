const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const nodemailer = require("nodemailer");
const creds = require("./config.env");
// const path = require("path");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
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
          to: "dglewcontactform@gmail.com",
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
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
  res.send({ express: "EXPRESS CONNECTED TO REACT" });
});
