// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// Создаем приложение Express
const app = express();

// Подключаем body-parser для обработки JSON
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Создаем схему пользователя
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Создаем модель пользователя
const User = mongoose.model('User', userSchema);

// Регистрация пользователя
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  // Проверка на существующего пользователя
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Хешируем пароль перед сохранением
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User successfully registered' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Запуск сервера на порту 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
