import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import mail from './mail.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/api/send-mail', (req, res) => {
	const { name, email, subject, message } = req.body;

	mail({ name, email, subject, message })
		.then((result) => console.log('Mail sent'))
		.catch((err) => console.error(`Email send error - ${err.message}`));
	res.send('sent');
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'src')));

	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('Server is running');
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
	);
});
