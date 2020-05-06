import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? '150' : '80'}px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #f3ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 18px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 17px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #312e38;
  border-top-width: 1px;
  border-top-color: #232129;
  padding: 16px 0 ${10 + getBottomSpace()}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-left: 10px;
`;
