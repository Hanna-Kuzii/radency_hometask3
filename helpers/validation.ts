import * as yup from 'yup';

// src/helpers/noteValidation.ts
// import * as Yup from 'yup';
import { Note } from '../repositories/notes';

// export const noteSchema = Yup.object().shape<Partial<Note>>({
//   name: Yup.string().required('Name is required'),
//   category: Yup.string().oneOf(['Idea', 'Task', 'Random Thought']).required('Category is required'),
//   content: Yup.string().required('Content is required'),
// });


export const noteSchema = yup.object().shape({
  // id: yup.number(),
  name: yup.string().required(),
  // icon: yup.string(),
  // created: yup.string(),
  category: yup.string().required(),
  content: yup.string().required(),
  // dates: yup.string(),
});
