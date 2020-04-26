import React from "react";
import { Tabs, Typography, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "95vh",
  },
  tabs: {
    width: "100%",
    display: "flex",
    height: "85vh",
  },
  buttonContainer: {
    height: "10vh",
  },
});

const SideBarBase = (props) => {
  const { classes } = props;
  let texts = [];

  for (let index = 0; index < 100; index++) {
    texts.push(<Typography>{`I am a sidebar ${index}`}</Typography>);
  }

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      noWrap
      className={classes?.root}
    >
      <Grid item>
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
      </Grid>
      <Grid item className={classes?.buttonContainer}>
        <Button fullWidth>Default</Button>
      </Grid>
    </Grid>
  );
};

const SideBar = withStyles(styles)(SideBarBase);

export { SideBar, SideBarBase };
