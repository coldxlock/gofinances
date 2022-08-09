import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header  = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
`;


export const Category = styled.View`
    width: 100%;
    padding: ${RFValue(15)}px;

    
`;

export const Icon = styled(Feather)``;

export const Name = styled.Text``;