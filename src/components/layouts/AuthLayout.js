import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {NavigationBar} from "../navbar/NavigationBar";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  flex: 0 0 60px;
  color: white;

`;

const Content = styled.div`
    flex-grow: 1;
    overflow: scroll;
`;

export default function AuthLayout({children}) {
    return (
        <>
            <Wrapper>
                <Header>
                    <NavigationBar/>
                </Header>
                <Content>
                    {children}
                </Content>
            </Wrapper>

        </>
    );
}
AuthLayout.propTypes = {
    children: PropTypes.element.isRequired
};