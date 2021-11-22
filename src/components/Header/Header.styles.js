import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    h1{
        font-family: "Raleway", sans-serif;
        font-weight: bold;
        font-size: var(--fontSuperBig);
        letter-spacing: -0.045em;
        color: var(--black);
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn{
        width: 5.563rem;
        font-size: var(--fontMed);
        color: var(--black);
        cursor: pointer;
        border: none;
        background: var(--white);
    }
    .active{
        border-bottom: 4px solid var(--blue);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;
    margin: 0 -1em;
    &:before,
    &:after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--lightGrey);
    }
`;
