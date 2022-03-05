import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'dist')));

	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
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
