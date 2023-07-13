import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StPaper onClick={() => navigate("/form")}>게시물 작성</StPaper>
      <StPaper onClick={() => navigate("/postings")}>게시물 보기</StPaper>
    </Box>
  );
}
const StPaper = styled(Paper)`
  &:hover {
    cursor: pointer;
  }
`;
export default MainPage;
