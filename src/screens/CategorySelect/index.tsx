import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { 
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name
} from './styles';

import { categories } from '../../utils/categories';

interface Category {
  key: string;
  name: string;  
}

interface Props {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
  
}: Props ) {
  return (  
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key }
        renderItem={ ({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />
    </Container>
  );
}