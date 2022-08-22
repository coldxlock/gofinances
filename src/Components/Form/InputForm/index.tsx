import React from 'react';
import { View } from 'react-native';
import { Input } from '../Input';
import { Container } from './styles';
import { Control , Controller } from 'react-hook-form'

interface Props extends TextInputProps {
    control: Control;
    name: string;

}

export function InputForm({
    control,
    name,
    ...rest
}: Props ){
  return (
    <Container>
      <Controller
        control={control}
        render={({ field }) => ()}
      >

      
        <Input 
            {...rest}
        />
      </Controller>
    </Container>
  )
}

