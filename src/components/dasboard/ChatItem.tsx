import Typography from "@mui/material/Typography";

export default function ChatItem(props: any) {
  return (
    <div>
      <Typography>{props.text}</Typography>
    </div>
  );
}
