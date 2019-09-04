import React from 'react';
import styled from 'styled-components';


export const List = styled.ul`
    font-size: 1.3rem;
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
    border-bottom: 1px solid #fda1a2;
    padding: 18px 0;
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
