const styles = (theme) => ({
  root: {
    display: "flex",
    margin: `${theme.spacing(1)}px 0px`,
    alignSelf: "center",
    padding: 8,
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: `${theme.spacing(1)}px 0px`,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: `${theme.spacing(1)}px 0px`,
  },
  media: {
    display: "flex",
    alignItems: "center",
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: theme.spacing(20),
    marginLeft: theme.spacing(1),
  },
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: theme.spacing(18),
  },
  cover: {
    width: 100,
    height: 100,
  },
  expand: {
    padding: 8,
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  more: {
    display: "flex",
    alignItems: "center",
    maxHeight: theme.spacing(25),
  },
  unvisited: {
    color: theme.palette.secondary.dark,
  },
});

export { styles };
