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

const HighlightCard: React.FC = () => {
  return (
    <Container >
        <Header>
            <Title>Entradas</Title>
            <Icon name="arrow-up-circle" />
        </Header>

        <Footer>
            <Amount>R$ 17.400,00</Amount>
            <LastTransation>Última entrada dia 13 de abril</LastTransation>
        </Footer>
    </Container>
  );
}

export default HighlightCard;