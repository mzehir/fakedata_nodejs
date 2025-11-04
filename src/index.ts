import express from 'express';
import cors from 'cors';
import { employeeRouter } from './routes/employee.routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//lorem