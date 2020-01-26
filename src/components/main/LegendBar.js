import React from "react";
import colors from "../utils/eventColors";
import styled from 'styled-components';

const Styled = styled.div`
 {
    display: flex;
    justify-content: flex-end;
    padding: 4px
 }
 
 .element{
    margin: 0px 16px 0px 0px;
 }
 
 .element > div{
    height: 24px;
    border-radius: 4px;
 }
`;

export const LegendBar = () => {
    return (
        <Styled>
            <div className="element">
                <div style={{backgroundColor: colors['active']}}>
                </div>
                Aktywne
            </div>
            <div className="element">
                <div style={{backgroundColor: colors['finished']}}>
                </div>
                Zakończone
            </div>
            <div className="element">
                <div style={{backgroundColor: colors['reviewed']}}>
                </div>
                Ocenione
            </div>
        </Styled>
    )
};