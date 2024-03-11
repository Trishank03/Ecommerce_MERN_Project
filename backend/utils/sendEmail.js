const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.email',
    port: 587,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: 'trishank03@gmail.com',
      pass: 'icxb lcho zppy euks'
    },
  });

  const mailOptions = {
    from: "trishank03@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  console.log(options.email);

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;