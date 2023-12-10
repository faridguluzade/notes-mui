import { useEffect, useState } from "react";

import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";

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
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Notes;
