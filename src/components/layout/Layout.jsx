import { Outlet, useLocation, useNavigate } from "react-router-dom";
import format from "date-fns/format";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";

import layoutStyles from "./Layout.styles";

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/create",
  },
];

function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box sx={layoutStyles.root}>
      {/* app bar */}
      <AppBar sx={layoutStyles.appbar} elevation={0}>
        <Toolbar>
          <Typography color="textSecondary" sx={layoutStyles.date}>
            {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography color="textSecondary">Farid Guluzade</Typography>
          <Avatar src="/avatar.png" sx={layoutStyles.avatar} />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer sx={layoutStyles.drawer} variant="permanent" anchor="left">
        <div>
          <Typography sx={layoutStyles.title} variant="h5">
            Ninja Notes
          </Typography>
        </div>

        {/* List / Links */}

        <List>
          {menuItems.map((menu) => (
            <ListItemButton
              key={menu.text}
              sx={pathname === menu.path ? layoutStyles.active : null}
              onClick={() => navigate(menu.path)}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box sx={layoutStyles.page}>
        <Box sx={layoutStyles.toolbar}></Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
