const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { json } = require('body-parser');
const router = express.Router();

router.post('/health', async (req, res) => {
  const { allergies, height, weight, gender, age, healthissue } = req.body;
  try {
    let userhealth = new User({
      allergies,
      height,
      weight,
      gender,
      age,
      healthissue,
    });

    await userhealth.save();

    res.status(200).json({ msg: 'All Done!', userhealth });
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
