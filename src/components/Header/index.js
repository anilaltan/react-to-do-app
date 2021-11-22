import React from "react";
import { NavLink } from 'react-router-dom';
import { Wrapper, Content, Divider } from "./Header.styles";

const Header = () => {

    return(
        <Wrapper>
            <h1>#todo</h1>
            <Content>
                <NavLink end to='/' >
                    <button className="btn">All</button>
                </NavLink>
                <NavLink end to='/active'>
                    <button className="btn">Active</button>
                </NavLink>
                <NavLink end to='/completed'>
                    <button className="btn">Completed</button>
                </NavLink>
            </Content>
            <Divider/>
        </Wrapper>
    );
}

export default Header;