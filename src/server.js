/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const app = require('./app');

// eslint-disable-next-line no-use-before-define
init();

async function init() {
  try {
    // eslint-disable-next-line no-undef
    app.listen(3001, () => {
      console.log('Express App Listening on Port 3001');
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
