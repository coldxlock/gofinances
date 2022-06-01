import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: white; //${({theme}) => theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding-top: 23px;
    padding-left: 19px;
    padding-right: 19px;
    padding-bottom: ${RFValue(42)}px;

    position: absolute;
    top: 160px;

    margin-left: 22px;
    
`;

export const Header = styled.View`
    /* background-color: yellow; */

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;  

export const Title = styled.Text`
    font-size: 14px;
    font-family: 'Inter_400Regular';
    color: #363F5F;
`; 

export const Icon = styled(Feather)`
    font-size: 38px;
    color: #12A454;
`; 

export const Footer = styled.View`
    /* background-color:; blue; */
    margin-top: 12px;
`; 

export const Amount = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: 'Poppins_500Medium';
    /* background-color: blue; */
    padding: 0;
    margin:0;
    height: 44px;
    color: #363F5F;
`; 

export const LastTransation = styled.Text`
    font-size: 12px;
    font-family: 'Poppins_400Regular';
    color: #969CB2;
    /* background-color: orange; */
`;