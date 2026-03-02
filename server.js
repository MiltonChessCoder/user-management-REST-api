require('dotenv').config()
const express = require('express');
const app = express();
const logger = require('./middleware/logger')
app.use(logger)
console.log("Logger loaded")
const port = 3000;

app.use(express.json());



const usersRouter = require('./routes/users')



app.get('/', (req, res) => {
  res.send('Bug fixers are here to help!');
});

app.get('/status', (req, res) => {
  res.json({ status: "ok" });
});

app.use('/users', usersRouter)

app.listen(port, () => console.log(`Server running on port ${port}`));

