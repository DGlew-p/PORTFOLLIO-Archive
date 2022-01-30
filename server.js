const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const nodemailer = require("nodemailer");
const creds = require("./config");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "dglewcontactform@gmail.com", // Change to your recipient
  from: "dglewcontactform@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });

var transport = {
  host: "smtp.gmail.com", // e.g. smtp.gmail.com
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
    console.log("All works fine, congratz!");
  }
});

app.use(express.json());
app.post("/send", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.messageHtml;

  var mail = {
    from: name,
    to: "dglewcontactform@gmail.com",
    subject: "Contact form request",

    html: message,
  };

  transporter.sendMail(mail, (err, data) => {
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
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
