const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3002;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'dowapdowari'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})