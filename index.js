import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;
// Middleware
app.use(cors());

// Serve static files from 'public' folder
app.use(express.static(join(__dirname, 'public')));
// API route - Branch B
app.get('/api/health', (req, res) => {
  res.json({ health: 'OK', branch: 'B', uptime: process.uptime() });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
