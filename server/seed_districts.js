require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const District = require('./models/district');

const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  if (!MONGO_URI) {
    console.error('ERROR: MONGO_URI not found in .env file. Add it first.');
    process.exit(1);
  }

  await mongoose.connect(MONGO_URI);
  console.log('Connected to database...');

  const raw = fs.readFileSync(path.join(__dirname, 'farminfo.json'), 'utf-8');
  const data = JSON.parse(raw);

  const entries = data
    .filter((x) => x.District && x.Taluka && x.Village)
    .map((x) => ({ District: x.District, Taluka: x.Taluka, Village: x.Village }));

  await District.deleteMany({});
  console.log('Cleared old District/Taluka/Village entries.');

  await District.insertMany(entries);
  console.log(`Inserted ${entries.length} District/Taluka/Village entries.`);

  await mongoose.disconnect();
  console.log('Done!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});