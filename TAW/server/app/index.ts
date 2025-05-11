import express from 'express';
import cors from 'cors';
import reviewRoutes from '../entities/review/routes/review.routes';
import { errorHandler } from '../shared/middleware/errorHandler';
import registrationRoutes from '../features/auth/routes/registration.routes';


const app = express();


// Подключаем маршруты авторизации под префиксом /api
// Роуты
app.use('/api/reviews', reviewRoutes);
app.use('api/registation', registrationRoutes)
// Middleware
app.use(cors());
app.use(express.json());

// Middleware - глобальная обработка ошибок 
app.use(errorHandler);

// Роуты
app.use('/api/reviews', reviewRoutes);

export default app;