import 'dotenv/config';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const PROJECT_ID = 'my-project-3816-1763290820100';
const SITE_KEY = '6LeeFWgsAAAAANwitFcBtNCVUMXdMo-MXan-o5fn';

console.log('Testing reCAPTCHA Enterprise verification...');
console.log('Project ID:', PROJECT_ID);
console.log('Site Key:', SITE_KEY);
console.log('API Key (first 10 chars):', RECAPTCHA_SECRET_KEY?.substring(0, 10) + '...');

// Simulate a real token (this will fail, but we can see the error)
const testToken = 'test-token-from-frontend';

const response = await fetch(
  `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${RECAPTCHA_SECRET_KEY}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: {
        token: testToken,
        siteKey: SITE_KEY,
        expectedAction: 'newsletter_subscribe'
      }
    }),
  }
);

const data = await response.json();

console.log('\nResponse status:', response.status);
console.log('\nResponse data:');
console.log(JSON.stringify(data, null, 2));

if (data.tokenProperties) {
  console.log('\n--- Token Properties ---');
  console.log('Valid:', data.tokenProperties.valid);
  console.log('Invalid Reason:', data.tokenProperties.invalidReason);
  console.log('Hostname:', data.tokenProperties.hostname);
  console.log('Action:', data.tokenProperties.action);
}

if (data.riskAnalysis) {
  console.log('\n--- Risk Analysis ---');
  console.log('Score:', data.riskAnalysis.score);
  console.log('Reasons:', data.riskAnalysis.reasons);
}
