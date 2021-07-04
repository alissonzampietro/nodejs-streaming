import { Request, Response, Application } from 'express';
import path from 'path';
import {createWriteStream, stat, createReadStream} from 'fs';

export default function Routes(app:Application) {
    app.get('/health', (req:Request, res:Response) => {
        res.end(JSON.stringify({status: 'its working'}))
    });

    app.post('/video', (req:Request, res:Response) => {
        const filePath = path.join(__dirname, '/../files/my-personal-video.mp4');
        console.log(filePath)
        const stream = createWriteStream(filePath);

        let uploadedSize = 0;
        req.on('data', (buffer) => {
            let length = buffer.length;

            uploadedSize += length;

            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const i = Math.floor(Math.log(uploadedSize) / Math.log(1024));
            
            console.log(parseFloat((uploadedSize / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i])

        })

        stream.on('open', () => req.pipe(stream));

        stream.on('close', () => res.end(JSON.stringify({message: 'file uploaded'})));
    
    })
}