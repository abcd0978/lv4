import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostings } from "../../api/post";
import { deletePosting } from "../../api/post";
const name = "posts";
export const fetchPosts = createAsyncThunk(
  `${name}/fetchPosts`,
  async ({ page, ob, unob }, thunkAPI) => {
    try {
      const res = await getPostings(page);
      return thunkAPI.fulfillWithValue({ res: res, ob: ob, unob: unob });
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const deletePost = createAsyncThunk(
  `${name}/deletePost`,
  async ({ id, cb }, thunkAPI) => {
    try {
      await deletePosting(id);
      return thunkAPI.fulfillWithValue({ id: id, cb: cb });
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        let dupArr = [...state.posts, ...action.payload.res];
        let dupRemovedArr = [
          ...new Map(dupArr.map((post) => [post.id, post])).values(),
        ];
        action.payload.unob();
        state.posts = dupRemovedArr;
        action.payload.ob();
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter((post) => {
          if (post.id !== Number(action.payload.id)) {
            return true;
          } else {
            return false;
          }
        });
        action.payload.cb();
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});
export default postSlice.reducer;
