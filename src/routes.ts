import { Request, Response, Application } from 'express';

export default function Routes(app:Application) {
    app.get('/health', (req:Request, res:Response) => {
        res.end(JSON.stringify({status: 'its working'}))
    });
}