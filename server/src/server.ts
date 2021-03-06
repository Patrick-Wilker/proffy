import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json());// para usar json, coisa que o express naturalmente nao faz
app.use(routes);

app.listen(3333);