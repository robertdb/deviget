import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { Card, CardMedia, Button } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const styles = (theme) => ({
  root: {
    display: "flex",
    margin: `${theme.spacing(1)}px 0px`,
    maxWidth: 327,
    alignSelf: "center",
    padding: 8,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: `${theme.spacing(1)}px 0px`,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: `${theme.spacing(1)}px 0px`,
  },
  media: {
    display: "flex",
    alignItems: "center",
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: theme.spacing(20),
    marginLeft: theme.spacing(1),
  },
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: theme.spacing(18),
  },
  cover: {
    width: 100,
    height: 100,
  },
  expand: {
    padding: 8,
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  more: {
    display: "flex",
    alignItems: "center",
  },
});

const CardBase = (props) => {
  const {
    classes,
    author,
    id,
    num_comments,
    thumbnail,
    title,
    time,
    key,
  } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const comments =
    num_comments > 1 ? `${num_comments} comments` : `${num_comments} comment`;

  return (
    <Card className={classes.root} key={key}>
      <div className={classes.details}>
        <div className={classes.wrapper}>
          <FiberManualRecordIcon />
          <div className={classes.title}>
            <Typography variant="body1" noWrap>
              {author}
            </Typography>
          </div>
          <Typography variant="subtitle1" color="textSecondary">
            {time}
          </Typography>
        </div>
        <div className={classes.media}>
          <CardMedia
            className={classes.cover}
            image={thumbnail}
            title={title}
          />
          <div className={classes.description}>
            <Typography variant="paragraph" noWrap display="inline-block">
              {title}
            </Typography>
          </div>
        </div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            size="small"
          >
            Dismiss Post
          </Button>
          <Typography variant="subtitle1" color="secondary">
            {comments}
          </Typography>
        </div>
      </div>
      <div className={classes.more}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChevronRight />
        </IconButton>
      </div>
    </Card>
  );
};

const enhance = compose(withStyles(styles));

const CardStyled = enhance(CardBase);

export { CardBase, CardStyled };
