import * as api from "../../utils/chats";

export const fetchChats = () => dispatch =>
  api.chatsApi().then(chats =>
    dispatch({
      type: "CAHT_FETCH_SUCCESS",
      chats,
    })
  );
