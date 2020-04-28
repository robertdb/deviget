import React from "react";
import { Grid, Typography, Hidden, Box } from "@material-ui/core";
import { SideBar, RightSide } from "../../components";

const HomeLayout = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Box p={1}>
          <Typography variant="h6" align="center" p={2}>
            Reddit Post
          </Typography>
        </Box>
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
