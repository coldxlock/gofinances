import React, { useState } from "react";

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

import { 
    Container,
    Headers,
    Title,
    Form,
    Fields,
    TransationsTypes
 } from './styles'

export function Register() {
    const [transactionType, setTransactionsType] = useState('');

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionsType(type)
    }
    return (
        <Container>
            <Headers>
                <Title>Cadastro</Title>
            </Headers>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    <TransationsTypes>
                        <TransactionTypeButton 
                            type="up"
                            title="Entrada"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton 
                            type="down"
                            title="Saída"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransationsTypes>
                    <CategorySelect
                        title="Categoria"
                    ></CategorySelect>
                </Fields>

                
                <Button 
                    title="Enviar"                
                />
            </Form>
        </Container>
    )
}