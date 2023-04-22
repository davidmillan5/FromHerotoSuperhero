require('dotenv').config();

const PORT = process.env.PORT || 3000,
  express = require('express'),
  app = express();

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
