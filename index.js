import express from 'express';
import cors from 'cors';
import blogRouter from './lib/routes/blogRoute.js';
import adminRouter from './lib/routes/adminRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/blog', blogRouter);
app.use('/api/admin', adminRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 