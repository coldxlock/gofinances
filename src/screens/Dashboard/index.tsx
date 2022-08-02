import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TrasanctionCardProps } from '../../components/TransactionCard';

import { 
  Container, 
  Header, 
  UserInfo, 
  Photo ,
  User ,
  UserGreeting ,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

export interface DataListProps extends TrasanctionCardProps {
  id: string;
}

export function Dashboard(){  
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Salário",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2020"
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburguer de Pizza",
      amount: "R$ 12.000,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "13/04/2020"
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'shopping-bag'
      },
      date: "13/04/2020"
    },
    {
      id: '4',
      type: 'positive',
      title: "Formatação de computador",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2020"
    },
   
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/15694609?v=4'}} />
            <User>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Prisco Cleyton</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>

      </Header> 

      <HighlightCards>
        <HighlightCard 
          type='up'
          title="Entradas" 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard 
          type='down'
          title="Saídas" 
          amount='R$ 10.100,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard 
          type='total'
          title="Total" 
          amount='R$ 27.500,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        
        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
          
        />
        
      </Transactions>
    </Container>
    )
}