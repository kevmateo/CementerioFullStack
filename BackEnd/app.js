import express from 'express'
import dotenv from 'dotenv'
import router from './routes/routes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express();
app.use(express.json());
app.disable('x-powered-by');
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true
  }
))
app.use(express.json())
app.use(cookieParser())
app.use(router)


const PORT = process.env.PORT ?? 3001


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})