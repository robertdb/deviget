import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = ({ palette }) => ({
  root: {
    height: "100vh",
    backgroundColor: palette.text.primary,
  },
  textColor: {
    color: palette.background.paper,
  },
});

const RightSideBase = (props) => {
  const { classes } = props;

  return (
    <Grid container direction="column" className={classes?.root}>
      <Typography className={classes?.textColor}>Right Side</Typography>
    </Grid>
  );
};

const RightSide = withStyles(styles)(RightSideBase);

export { RightSide, RightSideBase };
