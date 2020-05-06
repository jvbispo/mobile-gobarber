import styled, { css } from 'styled-components/native';

interface InputProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<InputProps>`
  width: 100%;
  height: 56px;
  background-color: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 16px;
  border-width: 2px;
  border-color: #232129;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;
