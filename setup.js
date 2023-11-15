const fs = require('fs');
const path = require('path');

// Check for a .env file and create one if it doesn't exist
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
    console.log('.env file not found. Creating one with default settings...');
    const defaultEnvContent = 'PORT=3000\n';
    fs.writeFileSync(envPath, defaultEnvContent);
    console.log('.env file created.');
}

console.log('Setup complete. You can now start the application with `npm start`.');