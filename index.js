// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const menu = require('./menu');

const app = express();
const port = process.env.PORT || 3000;

// Middleware pou parse POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Twilio Client inisyalizasyon
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Endpoint pou webhook Twilio a
app.post('/webhook', async (req, res) => {
  try {
    // Twilio voye mesaj ak plizyè paramèt
    const { Body, From } = req.body;
    console.log(`Resevwa mesaj soti nan ${From}: ${Body}`);

    // Si mesaj la se "/menu" oswa menm kòmand ou vle a
    if (Body.trim().toLowerCase() === '/menu') {
      // Reponn ak meni entelijan an
      const responseMessage = menu;
      
      // Vo anyen bay itilizatè a atravè Twilio
      await client.messages.create({
        from: process.env.TWILIO_WHATSAPP_NUMBER,
        to: From,
        body: responseMessage
      });
      console.log(`Meni voye bay ${From}`);
    } else {
      // Ka ajoute lòt kòmand oswa yon mesaj default isit la
      await client.messages.create({
        from: process.env.TWILIO_WHATSAPP_NUMBER,
        to: From,
        body: `Bonjou! Mande "/menu" pou w wè opsyon yo.`
      });
      console.log(`Repons default voye bay ${From}`);
    }

    // Twilio swete repons ak yon status OK
    res.status(200).send('OK');
  } catch (error) {
    console.error('Erè pandan webhook:', error);
    res.status(500).send('Gen yon erè.');
  }
});

app.listen(port, () => {
  console.log(`Bot lan ap koute sou pò: ${port}`);
});
