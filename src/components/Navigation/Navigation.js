import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.gray.light};
    padding: ${({ theme }) => theme.spacing.sm}px 0;
    justify-content: space-between;
`;

const Navigation = () => {
    return <Container>Tekst</Container>
}

export default Navigation;