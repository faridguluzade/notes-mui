import { DeleteOutline } from "@mui/icons-material";
import { Avatar, CardContent, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { blue, green, pink, yellow } from "@mui/material/colors";

function NoteCard({ note, onDelete }) {
  const avatarColor = {
    backgroundColor: blue,
  };

  if (note.category === "work") {
    avatarColor.backgroundColor = yellow[700];
  }
  if (note.category === "money") {
    avatarColor.backgroundColor = green[500];
  }
  if (note.category === "todos") {
    avatarColor.backgroundColor = pink[500];
  }
  if (note.category === "reminders") {
    avatarColor.backgroundColor = blue[500];
  }

  return (
    <Card elevation={1}>
      <CardHeader
        avatar={<Avatar sx={{ ...avatarColor }}>{note.category[0]}</Avatar>}
        action={
          <IconButton onClick={() => onDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography color="textSecondary" variant="body2">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
