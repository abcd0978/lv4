import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import useInput from "../hooks/useInput";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { fetchComments, writeComment } from "../redux/modules/commentSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Comment({ display }) {
  const dispatch = useDispatch();
  const { comments, loading } = useSelector((state) => state.commentReducer);
  const params = useParams();
  const [name, onChangeName] = useInput();
  const [desc, onChangeDesc] = useInput();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchComments(params.id));
    };
    fetchData();
  }, []);

  const submitComment = (e) => {
    e.preventDefault();
    dispatch(writeComment({ name: name, desc: desc, postId: params.id }));
  };
  return (
    <StCommentSection>
      <h2>comments</h2>
      <StForm>
        <label>작성자</label>
        <TextField value={name} onChange={onChangeName} />
        <label>내용</label>
        <TextField value={desc} onChange={onChangeDesc} />
        <Button title="제출" onClick={submitComment} />
      </StForm>
      <StCommentList>
        {loading && <p>로딩중</p>}
        {!loading &&
          comments?.map((comment) => (
            <StComment>
              <p>작성자:{comment.name}</p>
              <p>내용:{comment.desc}</p>
            </StComment>
          ))}
      </StCommentList>
    </StCommentSection>
  );
}
const StCommentSection = styled.div``;
const StForm = styled.form``;
const StCommentList = styled.div``;
const StComment = styled.div``;
export default Comment;
