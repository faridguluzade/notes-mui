import { useEffect, useState } from "react";

import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Masonry from "react-masonry-css";

import NoteCard from "../components/NoteCard";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  async function handleDelete(id) {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
  }

  return (
    <Container>
      <Masonry
        breakpointCols={{
          default: 3,
          1100: 2,
          700: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} onDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

export default Notes;
