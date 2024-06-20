const express = require('express');
const bodyparser = require('body-parser');
const stripe = require('stripe')('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')
const uuid = require('uuid').v4;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const PORT = process.env.PORT || 5000;
app.post('/checkout', (req, res) => {
  console.log(req.body);
})

app.listen(PORT, () => {
	console.log('App is listening on port 5000');
});
