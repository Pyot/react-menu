import React from 'react';
import styled from 'styled-components';


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

const ListItem = ({ item, type }) => {
    return (
        <Item type={type}>
            <Link href={item.href}
                data-testid={type}> 
                {item.name}
            </Link>
        </Item>
    )
}

export default ListItem