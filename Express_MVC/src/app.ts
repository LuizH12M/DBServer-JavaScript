import express from 'express';
import {router as aloRotas} from './alo.rotas';

const app = express();
app.use('/', aloRotas);

export default app;