import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faPlane, faCreditCard, faLifeRing, 
        faPhone, faSignOutAlt, faQuestionCircle, faInfoCircle} from '@fortawesome/free-solid-svg-icons'



export const List = styled.ul`
    font-size: 1.3rem;
    list-style: none;
    margin: 0px;
    padding: 0px;
    letter-spacing: -1px;
`

const Item = styled.li`
    :last-child{
        border-bottom: none;
    }
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fda1a2;
    padding: 18px 0;

`
const Link = styled.a`
    color: inherit;
    text-decoration: none;
    float: left;
    margin-left: 10px;
`

export const ListItem = ({ item, type }) => {
    const generateIcon = (itemName) => {
        switch (itemName) {
            case "Profile":
                return <FontAwesomeIcon icon={faUserCircle} />
            case "My Booking":
                return <FontAwesomeIcon icon={faPlane} transform={{ rotate: 315 }} />
            case "My Payment":
                return <FontAwesomeIcon icon={faCreditCard} />
            case "Support":
                return <FontAwesomeIcon icon={faLifeRing} />
            case "Contact Us":
                return <FontAwesomeIcon icon={faPhone} flip="horizontal" />
            case "Log Out":
                return <FontAwesomeIcon icon={faSignOutAlt} />
            case "About":
                return <FontAwesomeIcon icon={faQuestionCircle} />
            case "FAQ":
                return <FontAwesomeIcon icon={faInfoCircle} />
            default:
            // code block
        }
    }
    return (
        <Item type={type}>
            {generateIcon(item.name)}
            <Link href={item.href}
                data-testid={type}>
                
                {item.name}
            </Link>
        </Item>
    )
}
