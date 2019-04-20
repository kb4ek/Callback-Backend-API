const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('error', err => {
  console.log(err);
  console.log('✗ DB connection error. Please make sure DB is running.');
  process.exit();
});

db.once('open', () => {
  console.log('✓ DB connection success.');
});

mongoose.connect('mongodb://13.125.183.20:27017/callback');