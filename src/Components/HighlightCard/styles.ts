import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: white; //${({theme}) => theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;    
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;

    height: 300px;
    /* position: absolute;
    top: 160px;

    margin-left: 22px; */
    
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;  

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=> theme.fonts.regular };
    color: ${({theme}) => theme.colors.text_dark};
`; 

export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
    color: #12A454;
`; 

export const Footer = styled.View`
    /* background-color:; blue; */
    margin-top: 12px;
`; 

export const Amount = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family:  ${({ theme }) => theme.fonts.medium};
    padding: 0;
    margin-top: 38px;
    height: 44px;
    color: ${({ theme }) => theme.colors.text_dark};
`; 

export const LastTransation = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};    
`;


