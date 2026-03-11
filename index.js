import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static(join(__dirname, 'public')));

// API route - Branch A
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', branch: 'A', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});