import { describe, it, expect } from 'vitest';

describe('reCAPTCHA Enterprise Configuration', () => {
  it('should have RECAPTCHA_SECRET_KEY configured', () => {
    expect(process.env.RECAPTCHA_SECRET_KEY).toBeDefined();
    expect(process.env.RECAPTCHA_SECRET_KEY).not.toBe('');
    expect(process.env.RECAPTCHA_SECRET_KEY?.startsWith('AIza')).toBe(true);
  });

  it('should be able to call reCAPTCHA Enterprise API endpoint', async () => {
    const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
    const PROJECT_ID = 'my-project-3816-1763290820100';
    
    // Test with a dummy token to verify API endpoint is accessible
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${RECAPTCHA_SECRET_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: {
            token: 'dummy-token-for-testing',
            siteKey: '6LeeFWgsAAAAANwitFcBtNCVUMXdMo-MXan-o5fn',
            expectedAction: 'test'
          }
        }),
      }
    );

    const data = await response.json();
    console.log('reCAPTCHA API response status:', response.status);
    console.log('reCAPTCHA API response:', JSON.stringify(data, null, 2));
    
    // We expect either 200 (success) or 400 (invalid token, but API is accessible)
    // We don't expect 401 (unauthorized) or 403 (forbidden)
    expect([200, 400]).toContain(response.status);
    
    // If status is 400, it should be because of invalid token, not auth issues
    if (response.status === 400) {
      expect(data.error?.message).not.toContain('API key not valid');
      expect(data.error?.message).not.toContain('permission denied');
    }
  });
});
