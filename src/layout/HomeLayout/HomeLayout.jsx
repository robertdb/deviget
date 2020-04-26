import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { SideBar, RightSide } from "../../components";

const HomeLayout = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant="h6">Reddit Post</Typography>
        <SideBar />
      </Grid>
      <Grid item xs={8}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export { HomeLayout };
