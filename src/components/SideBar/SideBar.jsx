import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Tabs, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { actions, selectors } from "../../ducks/post";
import { CardPost as Card } from "../Card";

const styles = () => ({
  root: {
    height: "92vh",
  },
  tabs: {
    width: "100%",
    display: "flex",
    height: "84vh",
  },
  buttonContainer: {
    height: "8vh",
  },
});

const SideBarBase = (props) => {
  useEffect(() => {
    const { getPosts } = props;
    getPosts();
  }, []);

  const handleDelete = () => {
    const { deleteAll } = props;
    deleteAll();
  };

  const { classes, posts } = props;

  let listCards = posts.map((post, index) => <Card {...post} key={index} />);

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
          spacing={2}
        >
          {listCards}
        </Tabs>
      </Grid>
      <Grid item className={classes?.buttonContainer}>
        <Button fullWidth color="secondary" onClick={handleDelete}>
          Dismiss All
        </Button>
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
  deleteAll: () => dispatch(actions.deleteAllPost()),
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
);

const SideBar = enhance(SideBarBase);

export { SideBarBase, SideBar };
