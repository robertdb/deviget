import moment from "moment";

export const parseData = (data) => {
  return data.map((item) => {
    const {
      author,
      id,
      num_comments,
      thumbnail,
      created_utc,
      title,
    } = item.data;

    return {
      author,
      id,
      num_comments,
      thumbnail,
      title,
      time: moment.unix(created_utc).local().startOf("minute").fromNow(),
      visited: false,
    };
  });
};
