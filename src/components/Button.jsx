import React from "react";
import styled from "styled-components";
function Button({ title, onClick }) {
  return <StButton onClick={onClick}>{title}</StButton>;
}
const StButton = styled.button`
  height: 30px;
  cursor: pointer;
  border: 1px solid black;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  border-radius: 20px 20px 20px 20px;
  transition: all 0.125s ease-in 0s;
  background-color: #f8f9fa;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;
export default Button;
