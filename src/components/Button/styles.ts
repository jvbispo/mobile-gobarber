import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: #ff9000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 20px;
`;
