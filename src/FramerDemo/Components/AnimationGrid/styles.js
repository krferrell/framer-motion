import styled from 'styled-components';

export const MainContainer = styled.div`
    background: purple;
    display: grid;
    grid-template-columns: minmax(450px, 1fr);
    grid-auto-rows: 350px;
    grid-row-gap: 10px;
`;