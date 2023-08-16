import {View, Text} from 'react-native';
import React from 'react';

export default function FunctionLifeCycle() {
  const [name] = React.useState('');
  // TODO: callback , array deps
  React.useEffect(() => {
    // TODO: [] empty => componentDidMount
    // TODO: [name] => shoudComponetUpdate & componentDidUpdate
    return () => {
      // TODO: componentWillUnmount
    };
  }, [name]);
  // render
  return (
    <View>
      <Text>FunctionLifeCycle</Text>
    </View>
  );
}
