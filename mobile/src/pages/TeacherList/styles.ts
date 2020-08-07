import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const SearchForm = styled.View`
  margin-bottom: 8px;
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
