import 'dotenv/config.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST_NAME = process.env.HOST_NAME || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('h1');
})

app.listen(PORT, HOST_NAME, () => {
    console.log(`Server online with PORT:${PORT} - HOST_NAME:${HOST_NAME}`);
})