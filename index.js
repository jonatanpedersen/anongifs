const express = require('express');
const glob = require('glob');
const app = express();

app.set('view engine', 'pug');

app.use('/gifs', express.static('gifs'));

app.get('/', (req, res) => {
	const gifs = getGifs();
	res.render('index', { gifs });
});

app.get('/random', (req, res) => {
	const gifs = getGifs();
	var gif = gifs[Math.floor(Math.random() * gifs.length)];

	res.render('details', { gif });
});

app.get('/:gif', (req, res) => {
	const { gif } = req.params;
	res.render('details', { gif });
});

const port = process.env.PORT || 1030;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

function getGifs () {
	return glob.sync('*.gif', { cwd: './gifs/' });
}
