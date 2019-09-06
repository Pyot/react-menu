import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    min-height: 15vh;
    margin-bottom: 40px;
    margin-top: ${props => props.marginTop && props.marginTop};

`
export const Line = styled.div`
    width: 100%;
    border-top: 1px solid #fda1a2;
    margin-bottom: 21px;
`

export const Span = styled.span`
    font-size: ${props => props.fontSize && props.fontSize};
    font-weight: ${props => props.fontWeight && props.fontWeight};
`
