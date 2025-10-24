const db = require('./db-config.cjs');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    console.log('Received request body:', event.body);
    const { email } = JSON.parse(event.body);
    console.log('Parsed email:', email);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid email address' })
      };
    }

    // Check if email already exists
    console.log('Checking if email exists...');
    const checkResult = await db.query(
      'SELECT * FROM subscribers WHERE email = $1',
      [email]
    );
    console.log('Check result:', checkResult);

    if (checkResult.rows.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email already subscribed' })
      };
    }

    // Insert new subscriber
    const insertResult = await db.query(
      'INSERT INTO subscribers (email, subscribed_at) VALUES ($1, NOW()) RETURNING id',
      [email]
    );
    
    console.log('Insert result:', insertResult);
    
    if (insertResult.rows && insertResult.rows.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Successfully subscribed to newsletter' })
      };
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error subscribing to newsletter' })
    };
  } catch (error) {
    console.error('Subscription error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error subscribing to newsletter' })
    };
  }
};