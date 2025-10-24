const { neon } = require('@netlify/neon');

const sql = neon(); // automatically uses NETLIFY_DATABASE_URL

const query = async (text, params) => {
  try {
    console.log('Executing query:', text);
    const result = await sql(text, params);
    console.log('Query result:', result);
    return { rows: Array.isArray(result) ? result : [result] };
  } catch (err) {
    console.error('Query error:', err);
    throw err;
  }
};

module.exports = { query };