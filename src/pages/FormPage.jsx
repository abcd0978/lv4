import React from "react";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import { post } from "../api/post";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
function FormPage() {
  const [title, onChangeTitle] = useInput();
  const [desc, onChangeDesc] = useInput();
  const [name, onChangeName] = useInput();
  const navigate = useNavigate();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!name || !title || !desc) {
      alert("정보를 입력해주세요");
      return;
    }
    const data = {
      name: name,
      title: title,
      desc: desc,
    };
    await post(data);
    navigate("/");
  };
  return (
    <Box>
      <Paper>
        <Typography variant="h2">글쓰기</Typography>
        <Typography variant="span">이름</Typography>
        <TextField value={name} onChange={onChangeName} />
        <Typography variant="span">제목</Typography>
        <TextField value={title} onChange={onChangeTitle} />
        <br />
        <Typography>내용</Typography>
        <textarea
          value={desc}
          onChange={onChangeDesc}
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <Button onClick={onSubmitForm} title="제출" />
      </Paper>
    </Box>
  );
}

export default FormPage;
