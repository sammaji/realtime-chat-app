import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Container } from "@mui/material";

export default function SideBar() {
  return (
    <TreeView
      style={{ height: "100vh", backgroundColor: "red" }}
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      <TreeItem nodeId="1" label="Friends">
        <TreeItem nodeId="2" label="Add Friends" />
      </TreeItem>
      <TreeItem nodeId="3" label="Themes">
        <TreeItem nodeId="4" label="Light Theme" />
        <TreeItem nodeId="5" label="Dark Theme" />
        <TreeItem nodeId="6" label="Modern Theme" />
        <TreeItem nodeId="7" label="Calm Theme" />
      </TreeItem>
      <TreeItem nodeId="8" label="Settings">
        <TreeItem nodeId="9" label="Update Profile" />
        <TreeItem nodeId="10" label="Switch Account" />
        <TreeItem nodeId="11" label="Sign Out" />
      </TreeItem>
    </TreeView>
  );
}
