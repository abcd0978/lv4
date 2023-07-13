import React from "react";
import styled from "styled-components";
import { ReactComponent as Spinner } from "../assets/Spinner.svg";
function Loading() {
  return (
    <StModalBackground>
      <Spinner />
    </StModalBackground>
  );
}
const StModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
export default Loading;
