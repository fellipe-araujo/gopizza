import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title, TypeProps } from './styles';

type Props = {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
  onPress?: () => void;
};

export function Button({
  title,
  type = 'primary',
  isLoading = false,
  onPress,
}: Props) {
  const theme = useTheme();

  return (
    <Container type={type} disabled={isLoading} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={theme.COLORS.TITLE} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
