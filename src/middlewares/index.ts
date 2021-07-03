import { Application } from 'express';
import authMiddleware from './authMiddleware'

export default function(app:Application) {
    authMiddleware(app);
} 