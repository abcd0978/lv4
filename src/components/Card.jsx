import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
function Card({ id, name, title }) {
  const navigate = useNavigate();
  return (
    <Paper
      style={{ cursor: "pointer", height: "130px" }}
      onClick={() => navigate(`/spec/${id}`)}
    >
      <h2>작성자: {name}</h2>
      <h2>제목: {title}</h2>
    </Paper>
  );
}
export default Card;
