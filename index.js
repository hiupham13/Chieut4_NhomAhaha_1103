const express = require('express');
const app = express();
const PORT = 3000;

// Middleware parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route mặc định
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js + Express!' });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
