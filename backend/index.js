const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "aaqibb710@gmail.com",
    pass: process.env.PASSWORD,
  },
});

app.get("/", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: "aaqibb710@gmail.com",
    to: "aaqibb710@gmail.com",
    subject: `Mail from Portfolio from ${name}`,
    text: `Message from: ${name} (${email})\n\n${message}`,
    replyTo: email,
  };

  try {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.json({
          message: err,
        });
      } else {
        res.json({
          message: "Email sent",
        });
      }
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
});
const PORT = process.env.PORT;
app.listen(PORT);
