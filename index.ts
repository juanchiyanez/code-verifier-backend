import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import { request } from "http";

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT ?? 8000;

// Define the first route of App
app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to API Restful: Express + Ts + Nodemon + Jest + Swagger + Mongoose');
});

// Define a second route of App
app.get('/hello', (req: Request, res: Response) => {
    const name = req.query.name ?? 'anónimo';
    res.status(200).json({
        data: {
            message: `Hola, ${name}`
        }
    });
});

app.get('/goodbye', (req: Request, res: Response) => {
    res.status(200).json({
        data: {
            message: 'Goodbye, world'
        }
    })
});

// Execute App and listen request to PORT
app.listen(port, () => console.log(`EXPRESS SERVER: Running at http://localhost:${port}`));