const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bikes2Ride server is running successfully')
})

app.listen(port, () => {
    console.log('Bikes2Ride is running on port', port);
})