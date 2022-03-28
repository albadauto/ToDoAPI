import express from 'express';
import cors from 'cors';
import "./database/index"
import routerUser from './routes/UserRouter';
const app = express();


app.use(cors());
app.use(express.json());


app.use('/', routerUser);

app.listen(5000, () => console.log("Api rodando"));