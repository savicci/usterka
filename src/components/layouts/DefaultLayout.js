import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`;
export default function DefaultLayout({children}) {
    return <Wrapper>{children}</Wrapper>;
}
DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
