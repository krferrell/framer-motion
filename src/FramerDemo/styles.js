import styled from "styled-components";
import { colors } from "./utils/colors";

export const MainContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${colors.base};
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 1fr;
`;