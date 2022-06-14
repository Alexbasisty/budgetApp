/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from 'styled-components';

import { Wrapper } from 'components';

const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.gray.light};
    padding: ${({ theme }) => theme.spacing.sm}px 0;
    justify-content: space-between;
`;

const List = styled.ul`
    display: flex;
`;

const Navigation = ({ items }) => {
    return  ( 
    <Container>
        <Wrapper>
            <List>
                {items.map(item => (
                    <li>
                        <a href="#">{item.content}</a>
                    </li>
                ))}
            </List>
        </Wrapper>
    </Container>
    )
}

export default Navigation;