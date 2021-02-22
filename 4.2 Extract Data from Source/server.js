require('rootpath')();
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

let rawdata = fs.readFileSync('../4.BasicWebCrawler/sponsor.json');
let company = JSON.parse(rawdata);

app.get('/companies', (req,res) => {
    res.send(company);
})

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});