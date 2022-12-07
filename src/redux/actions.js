import { database } from "../database/config";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  remove,
  push,
  update,
} from "firebase/database";

export function startAddingPost(post) {
  return (dispatch) => {
    return set(ref(database, "posts/" + post.id), post).then(() => {
      dispatch(addPost(post));
    });
  };
}

export function startLoadingPost() {
  return (dispatch) => {
    const dbRef = ref(getDatabase());
    let post = [];

    return get(child(dbRef, "posts"))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          post.push(childSnapshot.val());
        });
        dispatch(loadPost(post));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function startDeletingPost(index, id) {
  return (dispatch) => {
    return remove(ref(database, "posts/" + id)).then(() => {
      dispatch(removePhoto(index));
    });
  };
}

export function startAddingComment(comment, id) {
  return (dispatch) => {
    const newcomment = push(
      child(ref(database, "comments/" + id), "comments/" + id)
    ).key;
    const updates = {};
    updates[newcomment] = comment;

    return update(ref(database, "comments/" + id), updates).then(() => {
      dispatch(addComment(comment, id));
    });
  };
}

export function startLoadingComments() {
  return (dispatch) => {
    const dbRef = ref(getDatabase());
    let comments = [];

    return get(child(dbRef, "comments"))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function removePhoto(i) {
  return {
    type: "REMOVE_PICTURE",
    i,
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

export function addComment(comment, id) {
  return {
    type: "ADD_COMMENT",
    comment,
    id,
  };
}

export function loadPost(post) {
  return {
    type: "LOAD_POST",
    post,
  };
}

export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments,
  };
}
