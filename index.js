const express = require('express');

const app = express();

app.get('/:id', (req, res) => {
	const {id} = req.params;
	res.render('index', {id});
});

const port = process.env.PORT || 1030;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
