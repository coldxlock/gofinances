import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape };

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;    
    padding-bottom: ${RFValue(16)}px;
    margin-right: 16px;    
    margin-top: ${RFValue(20)}px;    
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;  

export const Title = styled.Text<TypeProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=> theme.fonts.regular };
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark };
    
`; 

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    
    ${( { type } ) => type === 'up' && css`
        color: ${({ theme }) => theme.colors.success}
    `}

    ${({ type }) => type === 'down' && css`
        color: ${({ theme }) => theme.colors.attention}
    `}

    ${({ type }) => type === 'total' && css`
        color: ${({ theme }) => theme.colors.shape}
    `}
`; 

export const Footer = styled.View``; 

export const Amount = styled.Text<TypeProps>`
    font-size: ${RFValue(32)}px;
    font-family:  ${({ theme }) => theme.fonts.medium};
   
    margin-top: 38px;
    
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark };
`; 

export const LastTransation = styled.Text<TypeProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text };  
`;


