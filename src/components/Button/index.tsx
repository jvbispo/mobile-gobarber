import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ContainerText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ContainerText>{children} </ContainerText>
    </Container>
  );
};

export default Button;
