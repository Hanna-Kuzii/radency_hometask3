import * as express from 'express';
import { getAllNotes, createNote, getNote, editNote, deleteNote, getStats, archiveNote, unarchiveNote, getActiveNotes, getArchiveNotes } from '../services/notes';

const router = express.Router();

router.get('/notes/stats', getStats);
router.get('/notes', getAllNotes);
router.get('/notes/active', getActiveNotes);
router.get('/notes/archive', getArchiveNotes);
router.get('/notes/:id', getNote);

router.post('/notes', createNote);
router.patch('/notes/:id', editNote);
router.delete('/notes/:id', deleteNote);

router.patch('/notes/:id/archive', archiveNote);
router.patch('/notes/:id/unarchive', unarchiveNote);

export default router;
