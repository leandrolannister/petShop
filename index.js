const express = require('./src/config/express.js');
const app = express();

app.listen(3000, () => {
    console.log('Server is running at 3000');
});

