const nodemailer = require("nodemailer");




const SendMail = async (req,res) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'zachery.ortiz8@ethereal.email',
            pass: 'RKejpPMJmC8fXeHcA8'
        }
    });

    let info = await transporter.sendMail({
        from: '"Aman 👻" <amna.riaz@gmail.com>', // sender address
        to: "bar@example.com, amanamana606@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send(info);


} 



module.exports = SendMail;