import type { Handler, HandlerEvent } from "@netlify/functions";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { email, recaptchaToken } = JSON.parse(event.body || "{}");

    if (!email || !recaptchaToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email and reCAPTCHA token are required" }),
      };
    }

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "reCAPTCHA verification failed" }),
      };
    }

    // Add to Brevo
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        email,
        listIds: [2], // Adjust list ID as needed
        updateEnabled: true,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error("Brevo API error:", errorData);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to subscribe to newsletter" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Successfully subscribed!" }),
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
