const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

const app = express();

const oAuth2Client = new OAuth2Client('903356424826-m7eqf7a3mt374ipnaka0dui45s7do0sg.apps.googleusercontent.com', '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', 'http://localhost:3001/oauth2callback');

const getAccessToken = async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  return tokens.access_token;
};

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  // Récupérer le code d'autorisation de la requête
  const authorizationCode = req.body.authorizationCode;

  try {
    // Obtenir le jeton d'accès en utilisant le code d'autorisation
    const accessToken = await getAccessToken(authorizationCode);

    // Extraire les informations de l'e-mail à envoyer
    const { email, subject, message } = req.body;

    // Configurer le transporter nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'amaurym20005@gmail.com',
        pass: 'Amofire181'
      }
    });

    // Configurer les options de l'e-mail
    const mailOptions = {
      from: email,
      to: 'amaury.morot39@gmail.com',
      subject: subject,
      text: message
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send(error.toString());
      } else {
        res.status(200).send('E-mail envoyé avec succès: ' + info.response);
      }
    });
  } catch (error) {
    console.error('Erreur lors de l\'obtention du jeton d\'accès:', error);
    res.status(500).send('Erreur lors de l\'obtention du jeton d\'accès.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
