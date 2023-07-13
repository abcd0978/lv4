import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getPosting, modifyPosting } from "../api/post";
import Loading from "../components/Loading";
import Comment from "../components/Comment";
import Button from "../components/Button";
import { TextField } from "@mui/material";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/modules/postSlice";
function SpecPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [title, onChangeTitle, setTitle] = useInput();
  const [desc, onChangeDesc, setDesc] = useInput();
  const [name, onChangeName, setName] = useInput();
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await getPosting(id);
      setDesc(res[0].desc);
      setTitle(res[0].title);
      setName(res[0].name);
      setPost(res[0]);
    };
    getPost();
    setIsLoading(false);
  }, []);
  const modifyHandler = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };
  const saveHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      title: title,
      desc: desc,
    };
    await modifyPosting(id, data);
    setPost({
      id: id,
      name: name,
      title: title,
      desc: desc,
    });
    setIsEditing(false);
  };
  const deleteHandler = async (e) => {
    e.preventDefault();
    dispatch(deletePost({ id: id, cb: () => navigate("/postings") }));
  };
  return (
    <>
      <div>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Button title={"삭제"} onClick={deleteHandler} />
            {isEditing ? (
              <>
                <Button title={"저장"} onClick={saveHandler} />
                <p>
                  작성자:
                  <TextField defaultValue={name} onChange={onChangeName} />
                </p>
                <p>
                  제목:
                  <TextField defaultValue={title} onChange={onChangeTitle} />
                </p>
                <p>
                  내용:
                  <TextField defaultValue={desc} onChange={onChangeDesc} />
                </p>
              </>
            ) : (
              <>
                <Button title={"수정"} onClick={modifyHandler} />
                <p>작성자:{post.name}</p>
                <p>제목:{post.title}</p>
                <p>내용:{post.desc}</p>
              </>
            )}
          </>
        )}
      </div>
      <Comment />
    </>
  );
}

export default SpecPage;
