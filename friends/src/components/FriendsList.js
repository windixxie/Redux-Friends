import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';

const List = styled.div`

`;

export default props => (
    <List>
        {props.friends.map(x => <Friend key={x.id} data={x} deleteFriend={props.deleteFriend} updateFriend={props.updateFriend} />)}
    </List>
)