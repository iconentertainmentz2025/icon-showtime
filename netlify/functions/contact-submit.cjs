const db = require('./db-config.cjs');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { name, email, phone, subject, eventType, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Name, email, and message are required' })
      };
    }

    // Insert into database
    const result = await db.query(
      `INSERT INTO contact_submissions 
       (name, email, phone, subject, event_type, message, submitted_at) 
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       RETURNING id`,
      [name, email, phone, subject, eventType, message]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Thank you for your message. We will get back to you soon.',
        id: result.rows[0].id
      })
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting form. Please try again.' })
    };
  }
};