const drawerWidth = 240;

const layoutStyles = {
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
};

export default layoutStyles;
