import React from "react";
import Grid from "@material-ui/core/Grid";
import { SideBar, RightSide } from "../../components";

const HomeLayout = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
      <Grid item xs={8}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export { HomeLayout };
