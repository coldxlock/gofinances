import React from "react";

import { Input } from '../../components/Form/Input';

import { 
    Container,
    Headers,
    Title,
 } from './styles'

export function Register() {
    return (
        <Container>
            <Headers>
                <Title>Cadastro</Title>
            </Headers>

            <Input placeholder="Nome" />
        </Container>
    )
}