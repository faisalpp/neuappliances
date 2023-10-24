const { SMTP_HOST,SMTP_SECRET } = require('../config/index')
const nodemailer = require('nodemailer')

class NeuMailer{
 static async NodeMailer(body,subject,to){
  
    const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: SMTP_HOST,
            pass: SMTP_SECRET
        }
    })


    //2.configure email content.
    const mailOptions = {
        from: SMTP_HOST,
        to: to,
        subject: subject,
        html: body
    }

    //3. send email
    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Eamil sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }

 }

}

module.exports = NeuMailer;
