const express = require('express');
const Symptoms = require('../models/Symptoms');
const axios = require('axios');
const Diagnosis = require('../models/Diagnosis');
const { isAuth } = require('../middleware/auth');
const router = express.Router();
const config = require('config');

const token = config.get('token');

//Get symptoms from api
router.get('/symptom', async (req, res) => {
  console.log('Get Symptoms');
  try {
    const symptoms = await axios.get(
      `https://sandbox-healthservice.priaid.ch/symptoms?token=${token}&language=en-gb`
    );

    console.log(symptoms.data);
    const data = symptoms.data;
    const allSymptoms = new Symptoms({ symptoms: data });
    allSymptoms.save();
    res.json({ msg: 'Saved to database', data });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/diagnosis', isAuth, async (req, res) => {
  console.log('Get Diagnosis');
  const { symptomId, id, age, gender } = req.body;
  console.log(req.body);

  try {
    const diagnosis = await axios.get(
      `https://sandbox-healthservice.priaid.ch/diagnosis?token=${token}&language=en-gb&symptoms=[${symptomId}]&gender=${gender}&year_of_birth=${age}`
    );
    // const data = diagnosis.data
    // const allDiagnosis = new Diagnosis({
    //   userId,
    //   diagnosis: data
    // })
    // allDiagnosis.save()
    res.json({ msg: 'Diagnosed', data });
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
