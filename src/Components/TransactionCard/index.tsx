import React from 'react';
import { 
    Container, 
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles';

export function TransactionCard() {
  return (
    <Container>
        <Title>Transaction Card</Title>

        <Amount>100</Amount>

        <Footer>
            <Category>
                <Icon/>
                <CategoryName>Vendas</CategoryName>
            </Category>
            <Date>13/04/2020</Date>
        </Footer>
    </Container>

  );
}



