# radency_hometask3

## Features
- Create a new note with properties such as name, icon, created date, category, content, and dates.
- Edit an existing note by ID.
- Delete a note by ID.
- Archive a note, moving it from the active notes list to the archive notes list.
- Unarchive a note, moving it from the archive notes list back to the active notes list.
- Retrieve a specific note by ID.
- Retrieve all notes (both active and archived).
- Get aggregated data statistics (not implemented in this version).

## Prerequisites
- Node.js and npm should be installed on your machine.

## Getting Started
1. Clone the repository:
### git clone <repository-url>
2. Navigate to the project directory:
### cd radency_hometask3
3. Install dependencies:
### npm install
4. Start the development server:
### npm start

The server should be up and running at `http://localhost:3000`.

## Endpoints
- **POST /notes:** Create a new note. The request body should include properties for name, icon, created, category, content, and dates.
- **DELETE /notes/:id:** Delete a note by ID.
- **PATCH /notes/:id:** Edit an existing note by ID. The request body should include the updated properties.
- **GET /notes/:id:** Retrieve a specific note by ID.
- **GET /notes/active:** Retrieve active notes (both active and archived).
- **GET /notes/archive:** Retrieve archive notes (both active and archived).
- **GET /notes:** Retrieve all notes (both active and archived).
- **GET /notes/stats:** Get aggregated data statistics (not implemented in this version).
- **PATCH /notes/:id:/archive:** Archive a note, moving it from the active notes list to the archive notes list.
- **PATCH /notes/:id:/unarchive:** Unarchive a note, moving it from the archive notes list back to the active notes list.
