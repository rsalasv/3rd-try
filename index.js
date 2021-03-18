const express = require('express')
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const cors = require('cors')
const { json, urlencoded } = express
require('dotenv').config();

const PORT = 3000
const HOST = "0.0.0.0"

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

app.get('/', function (req, res) {
	res.send("nuevo try");
});

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: process.env.TONE_ANALYZER_IAM_APIKEY,
  }),
  serviceUrl: process.env.TONE_ANALYZER_URL,
});

app.post('/ricardo-salas', function (req, res) {

    const text = req.body.text;
  
    const toneParams = {
      toneInput: { 'text': text },
      contentType: 'application/json',
    };
  
    toneAnalyzer.tone(toneParams)
      .then(toneAnalysis => {
        console.log(JSON.stringify(toneAnalysis, null, 2));
        res.send(toneAnalysis.result);
      })
      .catch(err => {
        console.log('error:', err);
        res.send(err);
      });	
});

app.listen(PORT,HOST, () => { console.log(`Server listening on port ${PORT}`); })