const drawerWidth = 240;

const layoutStyles = {
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: (theme) => theme.spacing(3),
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
  title: {
    padding: (theme) => theme.spacing(2),
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  toolbar: (theme) => theme.mixins.toolbar,
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: (theme) => theme.spacing(2),
  },
};

export default layoutStyles;
