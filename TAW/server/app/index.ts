import express from 'express';
import cors from 'cors';
import reviewRoutes from '../entities/review/routes/review.routes';
import { errorHandler } from '../shared/middleware/errorHandler';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware - глобальная обработка ошибок 
app.use(errorHandler);

// Роуты
app.use('/api/reviews', reviewRoutes);

export default app;