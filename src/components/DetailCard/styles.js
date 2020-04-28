const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.text.primary,
    padding: theme.spacing(4),
  },
  wrapper: {
    marginTop: theme.spacing(2),
  },
  cover: {
    width: 100,
    height: 100,
    margin: "0 auto",
  },
  textColor: {
    color: theme.palette.background.paper,
  },
});

export { styles };
