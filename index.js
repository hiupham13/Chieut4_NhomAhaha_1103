import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route mặc định
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js + Express!' });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});