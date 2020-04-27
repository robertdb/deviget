import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { SideBar, RightSide } from "../../components";

const HomeLayout = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Typography variant="h6">Reddit Post</Typography>
        <SideBar />
      </Grid>
      <Hidden smDown>
        <Grid item md={8}>
          <RightSide />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export { HomeLayout };
