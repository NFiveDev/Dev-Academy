const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

let connectionString = '';

function GetEnvVariables() {
  const file = path.resolve(__dirname, '../.env');
  const fileContent = fs.readFileSync(file, 'utf-8');
  fileContent.split('\n').forEach((line) => {
    const equalsIndex = line.indexOf('=');

    if (equalsIndex !== -1) {
      const key = line.slice(0, equalsIndex).trim();
      const value = line.slice(equalsIndex + 1).trim();
      process.env[key] = value;
    }
  });
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model('User', userSchema);

const hashPassword = (input) => {
  return bcrypt.hashSync(input, 10);
};

const userSeeder = {
  data: [
    {
      username: 'admin',
      email: 'admin@admin.dk',
      password: hashPassword('adminadmin'),
    },
  ],
  seed: async function () {
    await userModel.insertMany(this.data);
  },
};

const coursesSeeder = () => {
  const courseSchema = mongoose.Schema;
};

async function Run() {
  GetEnvVariables();
  connectionString = process.env.MONGO_URL;
  if (!connectionString) throw new Error('No connect string specified!');
  try {
    await mongoose.connect(connectionString);
    await userSeeder.seed();
  } catch (e) {
    throw new Error('Cannot seed data: ' + e);
  } finally {
    console.log('SEEDER COMPLETE');
    mongoose.disconnect();
  }
}

Run();
