import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComments, comment } from "../../api/comment";
const name = "comments";
export const fetchComments = createAsyncThunk(
  `${name}/fetchComments`,
  async (id, thunkAPI) => {
    try {
      const res = await getComments(id);
      return thunkAPI.fulfillWithValue(res);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const writeComment = createAsyncThunk(
  `${name}/writeComment`,
  async (data, thunkAPI) => {
    try {
      const res = await comment(data);
      return thunkAPI.fulfillWithValue(res);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(writeComment.pending, (state) => {
        state.error = null;
      })
      .addCase(writeComment.fulfilled, (state, action) => {
        state.comments = [action.payload, ...state.comments];
      })
      .addCase(writeComment.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default commentSlice.reducer;
