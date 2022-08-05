import React from "react";

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import { 
    Container,
    Headers,
    Title,
    Form,
    Fields
 } from './styles'

export function Register() {
    return (
        <Container>
            <Headers>
                <Title>Cadastro</Title>
            </Headers>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                </Fields>
                <TransactionTypeButton />
                <Button 
                    title="Enviar"                
                />
            </Form>
        </Container>
    )
}