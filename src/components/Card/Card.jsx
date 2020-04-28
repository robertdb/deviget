import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  withWidth,
  Collapse,
  Typography,
  IconButton,
  Grow,
} from "@material-ui/core";
import { connect } from "react-redux";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { actions } from "../../ducks/post";
import { styles } from "./styles";

const CardBase = (props) => {
  const {
    author,
    classes,
    deletePost,
    id,
    num_comments,
    key,
    thumbnail,
    title,
    time,
    visited,
    showPost,
    setVisited,
    width,
  } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setVisited({ id });
  };

  const handlerShowPost = () => {
    showPost({ id });
    setVisited({ id });
  };

  const handleDelete = () => {
    deletePost({ id });
  };

  const comments =
    num_comments > 1 ? `${num_comments} comments` : `${num_comments} comment`;

  const showMore =
    width === "xs" || width === "sm" ? (
      <IconButton
        className={clsx(classes?.expand, {
          [classes?.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    ) : (
      <IconButton onClick={handlerShowPost}>
        <ChevronRight />
      </IconButton>
    );

  return (
    <Grow in>
      <Card className={classes?.root} key={key}>
        <div className={classes?.details}>
          <div className={classes?.wrapper}>
            <FiberManualRecordIcon
              className={visited ? {} : classes?.unvisited}
            />
            <div className={classes?.title}>
              <Typography variant="body1" noWrap>
                {author}
              </Typography>
            </div>
            <Typography variant="subtitle1" color="textSecondary">
              {time}
            </Typography>
          </div>
          <div className={classes?.media}>
            <CardMedia
              className={classes?.cover}
              image={thumbnail}
              title={title}
            />
            <div className={classes?.description}>
              <Typography noWrap>{title}</Typography>
            </div>
          </div>
          <div className={classes?.wrapper}>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              size="small"
              onClick={handleDelete}
            >
              Dismiss Post
            </Button>
            <Typography variant="subtitle1" color="secondary">
              {comments}
            </Typography>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>Here we can show more content!</Typography>
            </CardContent>
          </Collapse>
        </div>
        <div className={classes?.more}>{showMore}</div>
      </Card>
    </Grow>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showPost: ({ id }) => dispatch(actions.setCurretPost({ id })),
  deletePost: ({ id }) => dispatch(actions.deletePost({ id })),
  setVisited: ({ id }) => dispatch(actions.setVisited({ id })),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
  withWidth()
);

const CardPost = enhance(CardBase);

export { CardPost, CardBase };
