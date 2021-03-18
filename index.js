const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: 'm7yJzVHsDm_YckLDnMqG2yNkkWyf4UO4mhYBeEAv6HqC',
  }),
  serviceUrl: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/8b56da32-908d-48dc-ace0-aee45288a1fe',
});

toneAnalyzer.method(params)
  .catch(err => {
    console.log('error:', err);
  });