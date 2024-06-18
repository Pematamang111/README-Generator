const express = require('express');
const bodyparser = require('body-parser');
const stripe = require('stripe')()
const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(PORT, () => {
	console.log('App is listening on port 5000');
});
