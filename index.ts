import * as express from 'express';
import * as bodyParser from 'body-parser';
import notesRouter from './routes/notes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', notesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
