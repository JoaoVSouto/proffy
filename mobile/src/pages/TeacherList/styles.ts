import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import BaseButton from '../../components/BaseButton';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c1bccc',
  selectionColor: '#af8cff',
})`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const FilterButton = styled(BorderlessButton)`
  padding: 5px;
  margin-right: -5px;
`;

export const SubmitButton = styled(BaseButton)`
  background-color: #04d361;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
`;
