import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Tabs, Typography, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { actions, selectors } from "../../ducks/post";

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
  useEffect(() => {
    const { getPosts } = props;
    getPosts();
  }, []);

  const { classes, posts } = props;

  let texts = [];
  for (let index = 0; index < posts.length; index++) {
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
        <Button fullWidth={true}>Default</Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: selectors.getPost(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(actions.getPosts()),
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
);

const SideBar = enhance(SideBarBase);

export { SideBarBase, SideBar };
