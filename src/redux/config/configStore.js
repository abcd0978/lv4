import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../modules/postSlice";
import commentReducer from "../modules/commentSlice";
const store = configureStore({
  reducer: {
    postReducer,
    commentReducer,
  },
});

export default store;
