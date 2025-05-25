import express from 'express';
import cors from 'cors';
import reviewRoutes from '../entities/review/routes/review.routes';
import { errorHandler } from '../shared/middleware/errorHandler';
import registrationRoutes from '../features/auth/routes/registration.routes';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Роуты
app.use('/api/reviews', reviewRoutes);
app.use('/api/registration', registrationRoutes)
app.use('/api/reviews', reviewRoutes);

export default app;