const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./model');
const { getProfile } = require('./middleware/getProfile');

const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

// Added Middleware for Authenticating all Requests
app.use(getProfile);

app.get('/', async (req, res) => {
  res.send('Deel Assignment Server Up');
});

/**
 * FIX ME!
 * @returns contract by id
 */

app.get('/contracts/:id', getProfile, async (req, res) => {
  const { Contract } = req.app.get('models');
  const { id } = req.params;
  const contract = await Contract.findOne({ where: { id } });
  if (!contract) return res.status(404).end();
  res.json(contract);
});

module.exports = app;
