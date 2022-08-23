import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import { InputForm } from "../../components/Form/InputForm";
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { 
    Container,
    Headers,
    Title,
    Form,
    Fields,
    TransationsTypes
 } from './styles'

interface FormData {
    name: string;
    amount: string;
}

export function Register() {    
    const [transactionType, setTransactionsType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'

    });

    const {
        control,
        handleSubmit        
    } = useForm()

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionsType(type)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }

    function handleRegister(form: FormData) {
        const data = {
            name : form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data)
    }

    return (
        <Container>
            <Headers>
                <Title>Cadastro</Title>
            </Headers>

            <Form>
                <Fields>
                    <InputForm 
                        name="name"
                        control={control}
                        placeholder="Nome" 
                        autoCapitalize="sentences"     
                        autoCorrect={false}                   
                    />
                    <InputForm 
                        name="amount"
                        control={control}
                        placeholder="Preço" 
                        keyboardType="numeric"
                    />
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
                    <CategorySelectButton
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>

                
                <Button 
                    title="Enviar"     
                    onPress={handleSubmit(handleRegister)}           
                />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    )
}