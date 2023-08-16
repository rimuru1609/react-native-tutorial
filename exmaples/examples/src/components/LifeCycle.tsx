import {Button, Text, View} from 'react-native';
import React, {Component} from 'react';

interface Props {
  id?: string;
}
interface State {
  name: string;
}

export default class LifeCycle extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    console.log('constructor');
    this.state = {
      name: 'name',
    };
  }
  key: any = null;
  componentDidMount(): void {
    // TODO: component mounted to DOM
    // get remote data in localStorage or APIs
    // only run one time when mounted
    console.log('====================================');
    console.log('componentDidMount');
    console.log('====================================');
    this.key = setTimeout(() => console.log('time 3000'), 3000);
  }
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any,
  ): void {
    // TODO: component update any state changes
    // TODO: update information of item
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('componentDidCatch', error);
    console.error('errorInfo', errorInfo);
  }
  getSnapshotBeforeUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ) {
    console.log('getSnapshotBeforeUpdate prevProps', prevProps);
    console.log('getSnapshotBeforeUpdate prevState', prevState);

    return 999;
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any,
  ): boolean {
    if (nextProps.id !== this.props.id) {
      return true;
    }
    if (nextState.name !== this.state.name) {
      return true;
    }
    console.log('nextContext', nextContext);
    return false;
  }
  componentWillUnmount(): void {
    console.log('componentWillUnmount');
    clearTimeout(this.key);
  }
  render() {
    console.log('render');
    // render UI elements
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Button title="Update" onPress={() => this.setState({name: 'DTD'})} />
      </View>
    );
  }
}

//
