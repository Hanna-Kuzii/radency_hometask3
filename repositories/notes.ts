export interface Note {
  id: number;
  name: string;
  icon: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

export interface NotesCategory {
  active: Note[],
  archive: Note[]
}

let notes: NotesCategory = {
  active: [
    {
      "id": 55,
      "icon": "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      "name": "Shopping list",
      "created": "April 20, 2021",
      "category": "Task",
      "content": "Potatos, watermelon",
      "dates": "",
    },
    {
      "id": 468,
      "icon": "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      "name": "Sport",
      "created": "December 23, 2023",
      "category": "Task",
      "content": "Gym every day",
      "dates": ""
    },
    {
      "id": 129,
      "icon": "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      "name": "New house",
      "created": "May 10, 2020",
      "category": "Task",
      "content": "Buy new house",
      "dates": ""
    },
    {
      "id": 78,
      "icon": "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      "name": "Present",
      "created": "September 5, 2023",
      "category": "Task",
      "content": "Present for mother",
      "dates": ""

    },
    {
      "id": 640,
      "icon": "https://img.icons8.com/material-outlined/24/thinking-bubble.png",
      "name": "Bissnes",
      "created": "April 25, 2022",
      "category": "Random Thought",
      "content": "Mini green on Instagram",
      "dates": ""

    },
    {
      "id": 41,
      "icon": "https://img.icons8.com/material-outlined/24/shopping-cart--v1.png",
      "name": "Cleaning",
      "created": "June 30, 2023",
      "category": "Task",
      "content": "Clean room",
      "dates": ""

    },
    {
      "id": 271,
      "icon": "https://img.icons8.com/material-outlined/24/idea--v1.png",
      "name": "Meditation",
      "created": "April 26, 2022",
      "category": "Idea",
      "content": "Do everyday",
      "dates": ""
    }

  ],
  archive: []
};

export default notes;
