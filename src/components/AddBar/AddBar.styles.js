import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 18px 0;
    input{
        width: 476px;
        height: 56px;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        border-radius: 12px;
        &::placeholder{
            padding-left: 0.75rem;
        }
    }
    button{
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: var(--fontMed);
        width: 109px;
        height: 56px;
        background: var(--blue);
        color: white;
        box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
        border-radius: 12px;
        border: none;
        cursor: pointer;
        margin-left: 1.4rem;
    }
`;