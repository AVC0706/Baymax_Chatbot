const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Get Doctors');
  const doctors = {
    docotor1: {
      name: 'Dr. Avnish Gupte',
      qualification: 'Orthopedist',
      location: 'Hadapsar, Pune',
      contact: '9765062678',
      practice: 'Private clinic',
    },
    docotor2: {
      name: 'Dr. Sanjay Patil',
      qualification: 'Spine Surgeon',
      location: 'Warge, Pune',
      contact: '7721078849',
      practice: 'Mai Mangeshkar Hospital',
    },
    docotor3: {
      name: 'Dr. Rahul Chaudhary',
      qualification: 'Physiotherapist',
      location: 'Koregaon Park, Pune',
      contact: '8928145150',
      practice: 'Private clinic',
    },
    docotor4: {
      name: 'Dr. Bhushan Khedkar',
      qualification: 'Spine Surgeon',
      location: 'Deccan Gymkhana, Pune',
      contact: '8187334523',
      practice: 'Sahyadri Hospital',
    },
  };

  res.json({ msg: 'Get Doctors', doctors });
});

module.exports = router;
