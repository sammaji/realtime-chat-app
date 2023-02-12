import { useFirebaseAuth } from "../FirebaseAuthProvider";
import { useParams } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import SideBar from "./SideBar";
import Typography from "@mui/material/Typography/Typography";
import { Box } from "@mui/system";
import Container from "@mui/material/Container/Container";
import ChatComp from "./ChatComp";
import ChatItem from "./ChatItem";
import DashMenu from "./DashMenu";

export default function Dashboard() {
  const { user: currentUser } = useFirebaseAuth();
  const { uidfromURL } = useParams();

  return (
    <Grid container>
      <Grid item xs={3}>
        <SideBar />
      </Grid>
      <Grid item xs>
        <DashMenu />
        <Stack direction={"row"}>
          <ChatComp>
            <ChatItem text="Hello" />
            <ChatItem text="Hi" />
          </ChatComp>
          
        </Stack>
      </Grid>
    </Grid>
  );
}
