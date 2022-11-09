const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')


app.use(cors())



app.get('/', (req, res) => {
    res.send('Newsroom Psithurism server is running online');
});



app.listen(port, () => {
    console.log('Newsroom Psithurism Server is Running on port ', port);
})