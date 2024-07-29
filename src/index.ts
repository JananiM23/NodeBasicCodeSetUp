import express, { Request, Response} from "express";
import router from "./routes/sample.router";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req:Request, res:Response) => {
    res.send("Welcome to Node js basic setup with typescript!");
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`, `http://localhost:${PORT}`);
})

app.use('/app', router);