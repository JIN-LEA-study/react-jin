import { createStore } from "redux";

const configureStore = () => {
  const store = createStore(() => {
    return {
      message: "Hello World",
      data1: "just some testing data",
      data2: "just some testing data 2",
    };
  });

  return store;
};

export default configureStore;
