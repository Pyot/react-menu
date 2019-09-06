import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    flex: ${props => props.flex && props.flex};
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    margin-bottom: 12px;
    padding-top: 16px;
    align-items: center;
`

const AvatarOuter = styled.div`
    height: 60px;
    text-align: center;
    width: 60px;
    position: relative;
    background: #fff;
    vertical-align: middle;
    border-radius: 50px;
    float: ${props => props.float && props.float};
`


const Image = styled.img`
    height: 40px;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
`

const Info = styled.div`
    font-size:1.3rem;
    display: flex;
    flex-direction: column;
`

const Span = styled.span`
    text-align: center;
    font-size: ${props => props.size && props.size};
`

//It generate mobile menu user information section.
const UserBadge = ({ name, available, avatar }) =>
    <Wrapper>
        <AvatarOuter>
            <Image src={avatar ? avatar : 'avatar.png'}
                alt={'avatar'}
            />
        </AvatarOuter>
        <Info>
            <Span>{name}</Span>
            <Span size={'1rem'}>Avaiable Balance</Span>
            <Span>&pound; {available} </Span>
        </Info>
    </Wrapper>



export default UserBadge;