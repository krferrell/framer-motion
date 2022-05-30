import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const LinkNames = styled.a`
    display: flex;
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 25px;
`