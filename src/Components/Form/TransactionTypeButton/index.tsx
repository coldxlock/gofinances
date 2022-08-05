import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container } from './styles';

interface Props {
    title: string;
    type: 'up' | 'down';
}

export function TransactionTypeButton({title} : Props){
  return (
    <Container>
        <Icon />
        <Title>
            {title}
        </Title>
    </Container>   
  )
}
