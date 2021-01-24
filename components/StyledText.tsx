import * as React from 'react';

import { Text, TextProps } from './Themed';

export function PapyrusText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'papyrus' }]} />;
}
