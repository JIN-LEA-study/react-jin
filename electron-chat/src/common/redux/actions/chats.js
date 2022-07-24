import * as api from "../../utils/chats";

export const fetchChats = () => {
  return async function (dispatch) {
    const chats = await api.chatsApi();

    dispatch({
      type: "CAHT_FETCH_SUCCESS",
      chats,
    });
    // console.log("action", chats);
    return chats;
  };
};
