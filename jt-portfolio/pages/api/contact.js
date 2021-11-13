export default async function (req, res) {
    let nodemailer = require('nodemailer');
    require('dotenv').config();
    const PASSWORD = process.env.password;
    const subject = 'Message From ' + req.body.name;
    const text = req.body.message + " | Sent from: " + req.body.email;
    const content = "<div>" + req.body.message + "</div><p>Sent from: " + req.body.email + "</p>";
    
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'jtbotranger@gmail.com',
            pass: PASSWORD
        },
        secure: true,
    });

    const mailData = {
        from: 'jtbotranger@gmail.com',
        to: 'jostal@josephtalon.ca',
        subject: subject,
        text: text,
        html: content
    }

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function (err, info) {
            if(err) {
                console.log(err)
            } else {
                console.log(info)
            }
        })
    })
   

    res.status(200);
    res.send('Sent!');
}