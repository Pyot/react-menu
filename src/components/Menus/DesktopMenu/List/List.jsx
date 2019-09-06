import React from 'react';
import styled from 'styled-components';

//Resposible for desktop menu items generating.
export const List = styled.ul`
    font-weight:900;
    font-size: 2.3rem;
    list-style: none;
    margin: 0px;
    padding: 0px;
    letter-spacing: -1px;
`

const Item = styled.li`
  :nth-child(${props => props.type === 'main-menu' && 3}){
    margin-top: 44px;
}
display: flex;
`
const Link = styled.a`
    color: inherit;
    text-decoration: none;
    float: left;
`

export const ListItem = ({ item, type }) => {
    return (
        <Item type={type}>
            <Link href={item.href}
                data-testid={type}> 
                {item.name}
            </Link>
        </Item>
    )
}
