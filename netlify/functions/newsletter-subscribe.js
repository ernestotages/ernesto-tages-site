// Netlify Function to handle newsletter subscriptions via Brevo API
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const { email } = JSON.parse(event.body);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address' })
      };
    }

    // Get Brevo API key from environment variable
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Call Brevo API to add contact
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Add to "Newsletter ET Site - #2" list
        updateEnabled: false // Don't update if contact already exists
      })
    });

    const data = await response.json();

    // Handle different response codes
    if (response.status === 201) {
      // Contact created successfully
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true,
          message: 'Successfully subscribed to newsletter' 
        })
      };
    } else if (response.status === 400 && data.code === 'duplicate_parameter') {
      // Contact already exists
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true,
          message: 'Email already subscribed',
          alreadySubscribed: true
        })
      };
    } else {
      // Other error from Brevo
      console.error('Brevo API error:', data);
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          error: 'Failed to subscribe',
          details: data.message || 'Unknown error'
        })
      };
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};
