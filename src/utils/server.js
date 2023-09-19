const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 3001

const myemail = 'amaurym20005@gmail.com'

function sendEmail() 
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
            to:'amaury.morot39@gmail.com',
            subject:'TEsting koding osiajkdl',
            text:'checking if email will be sent '
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

app.get('/graphiLeaf/contact/', (req, res) => {

    sendEmail()
    .then(response => res.send(response.message))
    .catch(err => res.status(500).send(err.message))
})

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})
