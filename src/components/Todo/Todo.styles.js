import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 580px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.875rem;
    span{
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: var(--fontBig);
        line-height: 22px;
        color: var(--black);
    }
`;

export const CheckBox = styled.input`
    width: 24px;
    height: 24px;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 4px;
    background: #2F80ED;
    
`;

