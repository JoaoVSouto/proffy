import styled, { css } from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

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

const BaseInput = css`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c1bccc',
  selectionColor: '#af8cff',
})`
  ${BaseInput}
  color: #6a6180;
`;

export const TimeButton = styled(RectButton)`
  ${BaseInput}
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface ITimeButtonText {
  placeholder?: boolean;
}

export const TimeButtonText = styled.Text<ITimeButtonText>`
  color: ${({ placeholder }) => (placeholder ? '#c1bccc' : '#6a6180')};
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

export const NotFound = styled.Text`
  color: #6a6180;
  margin-top: 32px;
  font-size: 16px;
  text-align: center;
`;

export const DayPickerContainer = styled.View`
  ${BaseInput}
  padding: 0;
`;
