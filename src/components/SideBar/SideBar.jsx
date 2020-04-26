import React from "react";
import { Tabs, Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "90vh",
  },
  tabs: {
    width: "100%",
  },
});

const SideBarBase = (props) => {
  const { classes } = props;
  let texts = [];

  for (let index = 0; index < 100; index++) {
    texts.push(<Typography>{`I am a sidebar ${index}`}</Typography>);
  }

  return (
    <Box className={classes?.root}>
      <Tabs
        fullWidth
        orientation="vertical"
        variant="scrollable"
        value={""}
        onChange={() => {}}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {texts}
      </Tabs>
    </Box>
  );
};

const SideBar = withStyles(styles)(SideBarBase);

export { SideBar, SideBarBase };
