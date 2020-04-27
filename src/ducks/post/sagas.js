import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../api";
import * as actions from "./actionCreators";
import * as actionTypes from "./actionTypes";
import * as utils from "./utils";

/** WORKERS * */
function* getAccessTokenRequest() {
  const { feature } = actionTypes;

  let credentials = new FormData();
  for (let [key, value] of Object.entries(api.credential)) {
    credentials.append(key, value);
  }

  const data = {
    method: "post",
    headers: {
      Authorization: `Basic ${api.AUTH_KEY}`,
    },
    service: `${api.REDDIT_URL}/access_token`,
    body: credentials,
  };

  try {
    const { access_token } = yield call(api.request, data);

    localStorage.setItem("access_token", access_token);

    return yield put(
      actions.apiSuccess({
        response: { access_token },
        feature,
        meta: { ...data, body: api.credential },
      })
    );
  } catch (error) {
    // TODO: Handler errors
  }
}

function* getTopPostRequest({ token }) {
  const { feature } = actionTypes;

  const data = {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    service: `${api.REDDIT_URL_AUTH}/top?limit=50&t=hour`,
  };

  try {
    const {
      data: { children },
    } = yield call(api.request, data);

    const posts = utils.parseData(children);

    return yield put(
      actions.apiSuccess({
        response: { posts },
        feature,
        meta: { ...data, body: api.credential },
      })
    );
  } catch (error) {
    // TODO: Handler errors
  }
}

/** WATCHERS * */
function* getPost() {
  yield put(actions.setLoader({ loading: true }));

  // TODO: check expires
  let token = localStorage.getItem("access_token");

  if (!token) {
    const {
      payload: {
        response: { access_token },
      },
    } = yield call(getAccessTokenRequest);
    token = access_token;
  }

  const {
    payload: {
      response: { posts },
    },
  } = yield call(getTopPostRequest, { token });

  yield put(actions.setPosts({ posts }));

  yield put(actions.setLoader({ loading: false }));
}

export default function* () {
  yield takeLatest(actionTypes.GET_POSTS, getPost);
}
