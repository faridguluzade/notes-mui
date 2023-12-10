import { DeleteOutline } from "@mui/icons-material";
import { CardContent, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

function NoteCard({ note, onDelete }) {
  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton onClick={() => onDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
