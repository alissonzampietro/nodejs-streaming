import { Request, Response, Application } from 'express';
import path from 'path';
import {createWriteStream} from 'fs';

export default function Routes(app:Application) {
    app.get('/health', (req:Request, res:Response) => {
        res.end(JSON.stringify({status: 'its working'}))
    });

    app.post('/video', (req:Request, res:Response) => {
        const filePath = path.join(__dirname, '/../files/my-personal-video.mp4');
        console.log(filePath)
        const stream = createWriteStream(filePath);

        stream.on('open', () => req.pipe(stream));

        res.end('deploy done');
    
    })
}