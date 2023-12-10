import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
      {/* side drawer */}

      <Drawer sx={layoutStyles.drawer} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5">Ninja Notes</Typography>
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
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
