import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title, TypeProps } from './styles';

type Props = RectButtonProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
};

export function Button({
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.COLORS.TITLE} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
