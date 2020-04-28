import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { DetailCardPost } from "../DetailCard";

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
    <Grid container className={classes?.root}>
      <DetailCardPost />
    </Grid>
  );
};

const RightSide = withStyles(styles)(RightSideBase);

export { RightSide, RightSideBase };
