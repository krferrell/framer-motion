import styled, { keyframes } from "styled-components";
import reactoad from "./assets/reactoad.png";
import { VscGithubInverted } from "react-icons/vsc";


const lineGrow = keyframes`
    0%{
        transform: scaleX(0);
    }
    100%{
        transform: scaleY(1);
    }
`;

const lineShrink = keyframes`
    0%{
        transform: scaleX(1);
    }
    100%{
        transform: scaleY(0);
    }
`;

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const LogoContainer = styled.div`
    margin-top: 20px;
    height: 200px;
    width: 200px;
    background-image: url(${reactoad});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkNames = styled.a`
  display: flex;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
`;

export const UnderLine = styled.div`
  height: 2px;
  background: white;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  transition: scaleX 0.7 ease;
  animation-name: ${(props) =>
    props.showIndicator && props.name === props.indicator ? lineGrow : lineShrink};
  animation-duration: 0.7s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;

export const IconContainer = styled.a`
  display: flex;
  justify-content: center;
`

export const IconLink = styled(VscGithubInverted)`
  color: white;
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  margin-bottom: 30px;
`

