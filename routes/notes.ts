import * as express from 'express';
import { getNotes, createNote, getNote, editNote, deleteNote, getStats } from '../services/notes';

const router = express.Router();

router.get('/notes/stats', getStats);
router.get('/notes', getNotes);
router.post('/notes', createNote);
router.get('/notes/:id', getNote);
router.patch('/notes/:id', editNote);
router.delete('/notes/:id', deleteNote);

export default router;
