const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./model');
const { getProfile } = require('./middleware/getProfile');
const contractsRouter = require('./routes/contracts');

const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

// Added Middleware for Authenticating all Requests
app.use(getProfile);

app.get('/', async (req, res) => {
  res.send('Deel Assignment Server Up');
});
app.use('/contracts', contractsRouter);

module.exports = app;
