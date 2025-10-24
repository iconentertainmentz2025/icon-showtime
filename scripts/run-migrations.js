const fs = require('fs');
const path = require('path');
const { neon } = require('@netlify/neon');

async function runMigrations() {
  const sql = neon();
  
  // Get all migration files
  const migrationsDir = path.join(__dirname, '../migrations');
  const migrationFiles = fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith('.sql'))
    .sort();

  for (const file of migrationFiles) {
    console.log(`Running migration: ${file}`);
    const migration = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    
    try {
      await sql(migration);
      console.log(`Successfully ran migration: ${file}`);
    } catch (error) {
      console.error(`Error running migration ${file}:`, error);
      process.exit(1);
    }
  }

  console.log('All migrations completed successfully');
}

runMigrations().catch(console.error);