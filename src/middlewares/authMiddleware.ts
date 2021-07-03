import { Request, Response, Application, NextFunction } from 'express';

export default function authMiddleware(app:Application) {
    app.use((req:Request, res:Response, next:NextFunction) => {
        console.log('aqui é o middleware ');
        next();
    })
}