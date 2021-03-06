import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 10px;
  :not(:first-child) {
    border-top: 2px solid black;
  }

  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;

  position: relative;

  overflow: hidden;
`;

export const BgContainer = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;

  background-color: #282A36;
`;
