import { describe, it, expect } from "vitest";

describe("Newsletter Integration Test", () => {
  it("should verify reCAPTCHA Enterprise is working", async () => {
    const PROJECT_ID = 'my-project-3816-1763290820100';
    const API_KEY = process.env.RECAPTCHA_SECRET_KEY;
    const SITE_KEY = '6LeeFWgsAAAAANwitFcBtNCVUMXdMo-MXan-o5fn';
    
    expect(API_KEY).toBeDefined();
    
    // Test with a dummy token to verify API is accessible
    const testToken = 'test_token_' + Date.now();
    
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}`,
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

    expect(response.status).toBe(200);
    
    const data = await response.json();
    console.log('reCAPTCHA API Response:', JSON.stringify(data, null, 2));
    
    // Verify response structure
    expect(data).toHaveProperty('tokenProperties');
    expect(data).toHaveProperty('riskAnalysis');
    expect(data.tokenProperties).toHaveProperty('valid');
    expect(data.tokenProperties).toHaveProperty('invalidReason');
    
    // Token should be invalid (MALFORMED) since it's a test token
    expect(data.tokenProperties.valid).toBe(false);
    expect(data.tokenProperties.invalidReason).toBe('MALFORMED');
  });

  it("should verify Brevo API is accessible", async () => {
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    
    expect(BREVO_API_KEY).toBeDefined();
    
    // Test Brevo API by getting account info
    const response = await fetch("https://api.brevo.com/v3/account", {
      method: "GET",
      headers: {
        "api-key": BREVO_API_KEY!,
      },
    });

    expect(response.status).toBe(200);
    
    const data = await response.json();
    console.log('Brevo Account:', data.email);
    
    expect(data).toHaveProperty('email');
  });
});
