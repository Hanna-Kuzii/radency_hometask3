import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { createNote, deleteNote, editNote, getNote, getAllNotes, getStats, archiveNote, unarchiveNote, getActiveNotes, getArchiveNotes } from './services/notes';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/notes/stats', getStats);
app.get('/notes', getAllNotes);
app.get('/notes/active', getActiveNotes);
app.get('/notes/archive', getArchiveNotes);
app.get('/notes/:id', getNote);

app.post('/notes', createNote);
app.patch('/notes/:id', editNote);
app.delete('/notes/:id', deleteNote);

app.patch('/notes/:id/archive', archiveNote);
app.patch('/notes/:id/unarchive', unarchiveNote);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
