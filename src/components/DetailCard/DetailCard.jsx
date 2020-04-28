import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { CardMedia, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { selectors } from "../../ducks/post";
import { styles } from "./styles";

const DetailCardBase = (props) => {
  const { post, classes } = props;
  // TODO: should be nice handle this null outside, this is not component's responsability
  if (!post) return null;

  const { author, thumbnail, title } = post;

  return (
    <div className={classes?.root}>
      <div className={classes?.wrapper}>
        <Typography variant="body1" noWrap className={classes?.textColor}>
          {author}
        </Typography>
      </div>
      <CardMedia className={classes?.cover} image={thumbnail} title={title} />
      <div className={classes?.wrapper}>
        <Typography noWrap className={classes?.textColor}>
          {title}
        </Typography>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: selectors.getDetailPost(state),
  };
};

const enhance = compose(connect(mapStateToProps, null), withStyles(styles));

const DetailCardPost = enhance(DetailCardBase);

export { DetailCardPost, DetailCardBase };
