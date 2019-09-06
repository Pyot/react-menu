import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    flex-grow: ${props => props.flex && props.flex};
    display: flex;
    border-bottom: 1px solid #fda1a2;
    padding-bottom: 30px;
    margin-bottom: 12px;
    padding-top: 16px;
    align-items: center;
    flex-shrink:${props => props.flexShrink && props.flexShrink};
`

const AvatarOuter = styled.div`
    height: 76px;
    text-align: center;
    width: 76px;
    position: relative;
    background: #fff;
    vertical-align: middle;
    border-radius: 50px;
    float: ${props => props.float && props.float};
`

const Avatar = styled.div`
    height: 68px;
    width: 68px;
    display: inline-block;
    vertical-align: middle;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    border: 2px solid #fd6365;
    border-radius: 50px;
`

const Image = styled.img`
    height: 40px;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
`

const Info = styled.div`
    font-weight: 900;
    font-size:1.3rem;
    display: flex;
    flex-direction: column;
    margin-left: 24px;
`

const Span = styled.span`
    text-align: left;
`
//Resposible for generating desktop menu user information section.
const UserBadge = ({ name, available, avatar }) =>
    <Wrapper>
        <AvatarOuter float={'left'}>
            <Avatar>
                <Image src={avatar ? avatar : 'avatar.png'}
                alt={'avatar'}
                />
            </Avatar>
        </AvatarOuter>
        <Info>  
            <Span>{name}</Span>
            <Span>&pound; {available} Avaiable</Span>
        </Info>
    </Wrapper>



export default UserBadge;