const express = require('express')
const nodemailer = require('nodemailer')
const cors = require("cors");
const app = express()
const port = 5000

const myemail = 'amaurym20005@gmail.com'



app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail( { recipient_email, subject, message}) 
{
    return new Promise ((resolve, reject) => {

        let transporter = nodemailer.createTransport({
            service:'gmail', 
            auth:{
                user:myemail,
                pass:'uxsnydxwdqufdrdp',
            }
        })

        const mail_configs = {
            from:myemail,
            to:recipient_email,
            subject:subject,
            text:message
        }
        transporter.sendMail(mail_configs, function(err, info){
            if(err){
                console.log(err)
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sent successfully"})
        })
    })
}

app.get('/', (req, res) => {

    sendEmail()
    .then(response => res.send(response.message))
    .catch(err => res.status(500).send(err.message))
})

app.post("/send_email", (req, res) => {
    sendEmail(req.body)
        .then ((response) => res.send(response.message))
        .catch ((err) => res.status(500).send(err.message))
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})