import React from "react";
import colors from "../utils/eventColors";
import styled from 'styled-components';

const Styled = styled.div`
 {
    display: flex;
    justify-content: flex-end;
    padding: 8px
 }
 
 .element{
    margin: 0 16px;
 }
 
 .element > div{
    height: 32px;
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