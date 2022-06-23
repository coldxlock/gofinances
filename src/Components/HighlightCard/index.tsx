import React from 'react';
import { View } from 'react-native';

import { 
    Container,
    Header,  
    Title, 
    Icon, 
    Footer, 
    Amount, 
    LastTransation,
} from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
}

export function HighlightCard({
  title,
  amount,
  lastTransaction
} : Props){
  return (
    <Container >
        <Header>
            <Title>{title}</Title>
            <Icon name="arrow-up-circle" />
        </Header>

        <Footer>
            <Amount>{amount}</Amount>
            <LastTransation>{lastTransaction}</LastTransation>
        </Footer>
    </Container>
  );
}
