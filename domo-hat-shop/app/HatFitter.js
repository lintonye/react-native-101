import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  Button,
  PanResponder,
  Animated
} from "react-native";
import { connect } from "react-redux";
import Hat from "./Hat";
import Domo from "./Domo";
import NavigationService from "./NavigationService";
import styled from "styled-components";
import { confirmHatFitting } from "./actions";

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
`;

function calcDistance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function middle(p1, p2) {
  return (p1 + p2) / 2;
}

function calcCenter(x1, y1, x2, y2) {
  return {
    x: middle(x1, x2),
    y: middle(y1, y2)
  };
}

export class HatFitter extends Component {
  state = {
    translateXY: new Animated.ValueXY(),
    rotate: new Animated.Value(0),
    scale: new Animated.Value(1),
    zooming: false,
    committedValues: {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      scale: 1
    }
  };
  processTouch = gestureState => {
    const { translateXY, committedValues } = this.state;
    const { dx, dy } = gestureState;
    translateXY.x.setValue(committedValues.translateX + dx);
    translateXY.y.setValue(committedValues.translateY + dy);
  };
  processPinch = (x1, y1, x2, y2) => {
    const { committedValues } = this.state;
    if (this.state.zooming) {
      const newDistance = calcDistance(x1, y1, x2, y2);
      this.state.scale.setValue(
        newDistance / this.state.zooming.initialDistance * committedValues.scale
      );
    }
  };
  initPanResponder = () => {
    const yes = () => true;
    const moveThreshold = this.props.moveThreshold || 5;
    const shouldRespond = (evt, { dx, dy }) => {
      return (
        evt.nativeEvent.touches.length === 2 ||
        dx * dx + dy * dy >= moveThreshold
      );
    };
    this._panResponder = PanResponder.create({
      // onStartShouldSetPanResponder: yes,
      // onStartShouldSetPanResponderCapture: yes,
      // onMoveShouldSetPanResponder: yes,
      // onMoveShouldSetPanResponderCapture: yes,

      onShouldBlockNativeResponder: yes,
      onPanResponderTerminationRequest: yes,
      onMoveShouldSetPanResponder: shouldRespond,
      onStartShouldSetPanResponder: shouldRespond,
      onMoveShouldSetPanResponderCapture: shouldRespond,
      onStartShouldSetPanResponderCapture: shouldRespond,
      onPanResponderGrant: (e, gestureState) => {
        const { touches, changedTouches, identifier } = e.nativeEvent;
        // console.log(
        //   `${identifier} ${touches.length} touches, ${
        //     changedTouches.length
        //   } changedTouches`
        // );

        if (touches.length === 2) {
          const [t1, t2] = touches;
          const initialDistance = calcDistance(
            t1.pageX,
            t1.pageY,
            t2.pageX,
            t2.pageY
          );
          const center = calcCenter(t1.pageX, t1.pageY, t2.pageX, t2.pageY);
          this.setState({ zooming: { initialDistance, center } });
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const committedValues = {
          translateX: this.state.translateXY.x._value,
          translateY: this.state.translateXY.y._value,
          rotate: this.state.rotate._value,
          scale: this.state.scale._value
        };
        this.setState({ zooming: false, committedValues });
      },
      onPanResponderMove: (e, gestureState) => {
        const { touches } = e.nativeEvent;
        switch (touches.length) {
          case 1:
            this.processTouch(gestureState);
            break;
          case 2:
            const [t1, t2] = touches;
            this.processPinch(t1.pageX, t1.pageY, t2.pageX, t2.pageY);
            break;
        }
      }
    });
  };
  componentWillMount() {
    this.initPanResponder();
  }
  onConfirmPressed = () => {
    const { pose, onConfirm } = this.props;
    onConfirm && onConfirm(pose, this.state.committedValues);
  };
  onCancel = () => {
    const { onCancel } = this.props;
    onCancel && onCancel();
  };
  render() {
    const { hat, pose } = this.props;
    const hatStyle = {
      transform: [
        ...this.state.translateXY.getTranslateTransform(),
        { scale: this.state.scale }
      ]
    };
    return (
      <Container>
        <Title>Fit the hat</Title>
        <View {...this._panResponder.panHandlers}>
          <Domo
            hats={[hat]}
            index={0}
            poses={[pose]}
            poseIndex={0}
            hatStyle={hatStyle}
          />
        </View>
        <Button title="Looks good" onPress={this.onConfirmPressed} />
        <Button title="Cancel" onPress={this.onCancel} />
        {/* <Text>{JSON.stringify(this.state.committedValues.translateXY)}</Text> */}
      </Container>
    );
  }
}

const HatFitterScreen = props => {
  const { params } = props.navigation.state;
  const { pose } = params;
  return (
    <HatFitter
      {...props}
      pose={pose}
      onConfirm={(pose, hatStyle) => {
        props.dispatch(confirmHatFitting(pose, hatStyle));
        NavigationService.navigate("HatSwitcher");
      }}
      onCancel={() => NavigationService.navigate("HatSwitcher")}
    />
  );
};

export default connect(({ core: { hats, index } }) => ({ hat: hats[index] }))(
  HatFitterScreen
);
