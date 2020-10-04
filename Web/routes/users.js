const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { json } = require('body-parser');
const { isAuth } = require('../middleware/auth');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      const payload = {
        user: {
          id: user.id,
          email,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ msg: 'Logged In', token, user });
          console.log(token);
          console.log(payload);
        }
      );
    }

    user = new User({
      name,
      email,
    });

    await user.save();
    const payload = {
      user: {
        id: user.id,
        email,
      },
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ msg: 'Logged In', token, user });
        console.log(token);
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const { allergies, height, weight, gender, age, healthissue } = req.body;
  const userhealth = {};

  userhealth.allergies = allergies;
  userhealth.height = height;
  userhealth.weight = weight;
  userhealth.gender = gender;
  userhealth.age = age;
  userhealth.healthissue = healthissue;

  try {
    let health = await User.findById(req.params.id);
    if (!health) return res.status(404).json({ msg: 'User not found' });

    health = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userhealth },
      { new: true }
    );

    console.log(health);
    res.json({ msg: 'All Done!', health });
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/isAuth', isAuth, async (req, res) => {
  //start
  console.log('This is isAuth');
  const user = {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  };
  res.json({ isAuth: true, msg: 'Auth User', user });
  //end
});

module.exports = router;
