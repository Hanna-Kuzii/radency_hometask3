import { Request, Response } from 'express';
import notes, { Note, NotesCategory } from '../repositories/notes';
import { noteSchema } from '../helpers/validation';

export const getStats = (req: Request, res: Response) => {
  let statIdea = {
    active: 0,
    archive: 0
  };

  let statTask = {
    active: 0,
    archive: 0
  };
  let statRandomThought = {
    active: 0,
    archive: 0
  };

  notes.active.forEach((item) => {
    switch (item.category) {
      case "Task":
        statTask.active++;
        break;
      case "Idea":
        statIdea.active++;
        break;
      case "Random Thought":
        statRandomThought.active++;
        break;
      default:
        return res.status(400).json({ message: "Something went wrong" });
    }
  });

  notes.archive.forEach((item) => {
    switch (item.category) {
      case "Task":
        statTask.archive++;
        break;
      case "Idea":
        statIdea.archive++;
        break;
      case "Random Thought":
        statRandomThought.archive++;
        break;
      default:
        return res.status(400).json({ message: "Something went wrong" });
    }
  });

  const stats = {
    "Idea": statIdea,
    "Task": statTask,
    "Random Thought": statRandomThought,
  };

  return res.json(stats);
};
export const getNote = (req: Request, res: Response) => {
  const { id } = req.params;
  const note = notes.active.find((n) => n.id === parseInt(id));
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  return res.json(note);
};
export const getActiveNotes = (req: Request, res: Response) => {
  return res.json(notes.active);

};
export const getArchiveNotes = (req: Request, res: Response) => {
  return res.json(notes.archive);
};
export const getAllNotes = (req: Request, res: Response) => {
  return res.json(notes);
};
export const createNote = (req: Request, res: Response) => {
  const { name, category, content } = req.body;

  try {
    noteSchema.validateSync({ name, category, content }, { abortEarly: false });
  } catch (error: any) {
    return res.status(400).json({ message: 'You have to add right data', errors: error.errors });
  }

  let icon = '';
  switch (category) {
    case 'Idea':
      icon = 'https://img.icons8.com/material-outlined/24/idea--v1.png';
      break;
    case 'Task':
      icon = 'https://img.icons8.com/material-outlined/24/shopping-cart--v1.png';
      break;
    case 'Random Thought':
      icon = 'https://img.icons8.com/material-outlined/24/thinking-bubble.png';
      break;
    default:
      console.log(`Mistake.`);
  }

  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const dates = content.match(dateRegex);

  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const created = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  const newNote: Note = {
    id: Date.now(),
    icon: icon,
    name: name,
    created: created,
    category: category,
    content: content,
    dates: dates?.toString() || '',
  };

  notes.active.push(newNote);

  return res.json(newNote);
};
export const editNote = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteIndex = notes.active.findIndex((n) => n.id === parseInt(id));

  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found in active notes. You should unarchive and try again' });
  }

  const existingNote = notes.active[noteIndex];

  const { name, content, category } = req.body;

  if (!name || !content || !category) {
    return res.status(400).json({ message: "You have to add right data" });
  }

  let icon = "";
  switch (category) {
    case "Idea":
      icon = "https://img.icons8.com/material-outlined/24/idea--v1.png";
      break;
    case "Task":
      icon = "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png";
      break;
    case "Random Thought":
      icon = "https://img.icons8.com/material-outlined/24/thinking-bubble.png";
      break;
    default:
      return res.status(400).json({ message: "Invalid category" });
  }

  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const dates = content.match(dateRegex);

  const updatedNote: Note = {
    ...existingNote,
    icon,
    name,
    category,
    content,
    dates: dates?.toString() || "",
  };

  noteSchema
    .validate(updatedNote)
    .then((validatedNote) => {
      notes.active[noteIndex] = updatedNote;
      res.json(validatedNote);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};
export const deleteNote = (req: Request, res: Response) => {
  const { id } = req.params;
  const noteIndex = notes.active.findIndex((n) => n.id === parseInt(id));
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found in active notes. You should unarchive and try again' });
  }
  const deletedNote = notes.active.splice(noteIndex, 1)[0];
  return res.json(deletedNote);
};
export const archiveNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = notes.active.findIndex((note) => note.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Note not found.' });
  } else {
    const noteToArchive = notes.active.splice(index, 1)[0];
    notes.archive.push(noteToArchive);
    res.json(noteToArchive);
  }
};
export const unarchiveNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const index = notes.archive.findIndex((note) => note.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Note not found.' });
  } else {
    const noteToUnarchive = notes.archive.splice(index, 1)[0];
    notes.active.push(noteToUnarchive);
    res.json(noteToUnarchive);
  }
};
