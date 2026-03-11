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

// Serve static files (index.html, CSS, images) từ thư mục 'public'
app.use(express.static(join(__dirname, 'public')));

// API route
app.get('/api/info', (req, res) => {
  res.json({ message: 'Flower Shop API', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});