const db = require('./db-config.cjs');

exports.handler = async (event, context) => {
  try {
    console.log('Testing database connection...');
    
    // Simple test query
    const result = await db.query('SELECT version()');
    console.log('Query successful');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Database connection successful',
        version: result.rows[0].version
      })
    };
  } catch (error) {
    console.error('Database test failed:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Database connection failed',
        error: error.message
      })
    };
  }
};