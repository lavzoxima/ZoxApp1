import React, {Component} from 'react';
import {View, Animated, Dimensions, Text} from 'react-native';

class RNToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity),
    };
  }

  show(text, duration) {
    this.duration = typeof duration === 'number' ? duration : 500;
    this.setState({
      showText: true,
      text: text,
    });
    this.animation = Animated.timing(this.state.opacityValue, {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration,
    });
    this.animation.start(() => {
      this.close();
    });
  }

  close() {
    let delay = this.duration;
    if (delay === 0) delay = this.props.defaultCloseDelay || 250;
    if (!this.state.showText) return;
    this.timer = setTimeout(() => {
      this.animation = Animated.timing(this.state.opacityValue, {
        toValue: 0.0,
        duration: this.props.fadeOutDuration,
      });
      this.animation.start(() => {
        this.setState({
          showText: false,
        });
      });
      clearTimeout(this.timer);
    }, delay);
  }

  componentWillUnmount() {
    this.animation && this.animation.stop();
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const {height} = Dimensions.get('window');
    let pos;
    switch (this.props.position) {
      case 'top':
        pos = this.props.positionValue;
        break;
      case 'center':
        pos = height / 2;
        break;
      case 'bottom':
        pos = height - this.props.positionValue;
        break;
    }
    const view = this.state.showText ? (
      <View style={[styles.container, {top: pos}]} pointerEvents="none">
        <Animated.View
          style={[styles.content, {opacity: this.state.opacityValue}]}>
          <Text style={this.props.textStyle}>{this.state.text}</Text>
        </Animated.View>
      </View>
    ) : null;
    return view;
  }
}

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 999,
    alignItems: 'center',
    zIndex: 10000,
  },
  content: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: 'white',
  },
};

RNToast.defaultProps = {
  position: 'bottom',
  textStyle: styles.text,
  positionValue: 120,
  fadeInDuration: 500,
  fadeOutDuration: 500,
  opacity: 1,
};

export default () => {
  let ref = void 0;
  const showToast = (message, ms) => {
    if (!message || !ref) {
      return;
    }
    ref.show(message, ms);
  };

  class Toast extends React.Component {
    componentWillUnmount() {
      ref = void 0;
    }
    render() {
      return <RNToast ref={classRef => (ref = classRef)} />;
    }
  }

  return {
    showToast,
    Toast,
  };
};
